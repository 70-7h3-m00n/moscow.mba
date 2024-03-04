import stls from '@/styles/pages/PageSeminar.module.sass'
import breadcrumbsStls from '@/styles/components/general/Breadcrumbs.module.sass'
import routesFront from '@/config/routesFront'
import { handleGetStaticPaths, handleGetStaticProps } from '@/lib/index'
import SeminarPage from 'modules/seminar-page/SeminarPage'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { TypeLibSeminar, TypePageSeminarProps } from '@/types/index'
import truncate from 'truncate'
import companyName from '@/config/companyName'
import { NextSeo } from 'next-seo'
import { SeoOrganizationJsonLd } from '@/components/seo'
import { Breadcrumbs, ScrollProgress } from '@/components/general'
import {
	Dispatch,
	SetStateAction,
	createContext,
	useEffect,
	useState
} from 'react'
import usePageHandleContext from '@/hooks/usePageHandleContext'
import { preview } from '@/config/preview'

const initialState: TypeLibSeminar = {
	id: null,
	date: null,
	duration: null,
	title: null,
	slug: null,
	seminar_categories: null,
	authors: null,
	address: null,
	price: null,
	description: null,
	advantagesList: null,
	pdfMaterials: null
}

export const ContextStaticPropsSeminar = createContext<{
	seminar: TypeLibSeminar
	setSeminar: Dispatch<SetStateAction<TypeLibSeminar>>
}>({
	seminar: initialState,
	setSeminar: () => {}
})

const PageSeminar: NextPage<TypePageSeminarProps> = ({ programs, seminar }) => {
	usePageHandleContext({ programs })
	const [seminarState, setSeminarState] = useState<TypeLibSeminar>(initialState)
	const currentSeminarSlug = seminar?.slug

	useEffect(() => {
		setSeminarState(seminar)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const seoParams = {
		title: `${seminar?.title || 'Семинар'} • MBA - ${companyName}`,
		desc: truncate(`${seminar?.description}`, 120),
		canonical: currentSeminarSlug
			? `${routesFront.root}${routesFront.seminars}/${currentSeminarSlug}`
			: `${routesFront.root}${routesFront.seminars}`
	}

	return (
		<>
			<NextSeo
				title={seoParams.title}
				description={seoParams.desc}
				canonical={seoParams.canonical}
				nofollow={preview}
				noindex={preview}
				openGraph={{
					url: seoParams.canonical,
					title: seoParams.title,
					description: seoParams.desc,
					images: [
						{
							url: `${routesFront.root}${routesFront.assetsImgsIconsManifestIcon512}`,
							width: 512,
							height: 512,
							alt: companyName,
							type: 'image/png'
						}
					],
					site_name: companyName
				}}
			/>
			<SeoOrganizationJsonLd />
			<section className={breadcrumbsStls.jumbotronGeneral}>
				<div className={stls.generalContainer}>
					<Breadcrumbs />
				</div>
			</section>
			<ScrollProgress />
			<ContextStaticPropsSeminar.Provider
				value={{
					seminar: seminarState,
					setSeminar: setSeminarState
				}}
			>
				<SeminarPage />
			</ContextStaticPropsSeminar.Provider>
		</>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	return await handleGetStaticPaths({ page: routesFront.seminar })
}

export const getStaticProps: GetStaticProps = async context => {
	return await handleGetStaticProps({
		page: routesFront?.seminar,
		context
	})
}

export default PageSeminar
