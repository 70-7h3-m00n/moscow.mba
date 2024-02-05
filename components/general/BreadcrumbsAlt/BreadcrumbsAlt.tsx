import stls from './BreadcrumbsAlt.module.sass'
import cn from 'classnames'

import { useRouter } from 'next/router'
import { useAt } from '@/hooks/index'
import { Wrapper } from '@/components/layout'
import { BreadcrumbItemAlt } from './BreadcrumbItemAlt/BreadcrumbItemAlt'
import {
	courseRoute,
	homeRoute,
	mainRoutes,
	professionRoute
} from './constants'

export const BreadcrumbsAlt = ({ programChunkData = {} }) => {
	const at = useAt()
	const router = useRouter()
	const userViewingProfession = at.profession
	const userViewingCourse = at.course
	const userViewingPrograms = at.programs
	const userViewingProgramChunk = at.programChunk

	let breadcrumbsList = [homeRoute]
	const maxNumOfBreadcrumbs = 4
	const additionalRoutes = []

	const matchingMainRoutes = mainRoutes
		.filter(route => route.path !== '/')
		.filter(
			route =>
				router.pathname === route.path ||
				at.getSplitedPath.includes(route.path.slice(1))
		)

	const addProgramsRoute = splitedPath => {
		const excludingMainProgramsRoute = splitedPath.filter(
			pathPart => pathPart !== 'programs'
		)

		const programsRoute = excludingMainProgramsRoute.reduce(
			(acc, curr, idx) => {
				if (userViewingProfession) return professionRoute
				if (userViewingCourse) return courseRoute

				if (curr) {
					idx === 0
						? (acc.label.ru += curr.toUpperCase() + ' ')
						: (acc.label.ru += curr.toUpperCase())
				}

				return acc
			},
			{
				label: {
					ru: '',
					'en-US': ''
				},
				path: '/' + splitedPath.join('/')
			}
		)
		additionalRoutes.push(programsRoute)
	}

	const addProgramChunkRoute = (splitedPath, programChunkData) => {
		const programChunkRoute = {
			label: {
				ru: programChunkData?.title,
				'en-US': programChunkData?.titleEng
			},
			path: '/' + splitedPath.join('/') + '/' + programChunkData?.url
		}

		additionalRoutes.push(programChunkRoute)
	}

	if (userViewingPrograms) addProgramsRoute(at.getSplitedPath)
	console.log('at.getSplitedPath: ', at.getSplitedPath)
	if (userViewingProgramChunk)
		addProgramChunkRoute(at.getSplitedPath, programChunkData)

	if (matchingMainRoutes.length) breadcrumbsList.push(...matchingMainRoutes)
	if (additionalRoutes.length) breadcrumbsList.push(...additionalRoutes)

	if (breadcrumbsList.length === 1) return null

	if (breadcrumbsList.length > maxNumOfBreadcrumbs)
		breadcrumbsList = breadcrumbsList.slice(-maxNumOfBreadcrumbs)

	return (
		<div className={cn(stls.breadcrumbsOuter, stls.jumbotronBreadcrumbs)}>
			<Wrapper>
				<ul className={stls.breadcrumbs}>
					{breadcrumbsList.map((route, idx) => (
						<BreadcrumbItemAlt
							key={idx + route.label['ru']}
							linkText={route.label.ru}
							linkPath={route.path}
							itemIndex={idx}
							listLength={breadcrumbsList.length}
							userViewingProgramChunk={userViewingProgramChunk}
						/>
					))}
				</ul>
			</Wrapper>
		</div>
		// <></>
	)
}
