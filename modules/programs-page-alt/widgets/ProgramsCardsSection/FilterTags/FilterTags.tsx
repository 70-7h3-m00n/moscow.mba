import stls from './FilterTags.module.sass'
import cn from 'classnames'
import { FilterTagsProps, TagsType } from './types'

import { Tag } from 'modules/program-page/widgets'
import { IconCloseAlt, IconRefresh } from '@/components/icons'
import { ACTION } from 'modules/programs-page-alt/fractals/context/reducer'
import {
	FilterTypeProgramEnum,
	SortingEnum
} from 'modules/programs-page-alt/fractals'
import { useContext, useEffect, useState } from 'react'
import { ProgramsPageContext } from 'modules/programs-page-alt/fractals/context/context'

export const FilterTags = ({ className, ...rest }: FilterTagsProps) => {
	const { state, dispatch } = useContext(ProgramsPageContext)
	const config = state.programsConfig

	const [tags, setTags] = useState<TagsType[]>([])

	useEffect(() => {
		const array: TagsType[] = [
			...(config.type === FilterTypeProgramEnum.all
				? []
				: [
						{
							title: config.type,
							action: {
								type: ACTION.SET_TYPE,
								payload: FilterTypeProgramEnum.all
							}
						}
				  ]),
			...(config.duration?.max === config.duration?.value
				? []
				: [
						{
							title: `От ${config.duration?.min} до ${config.duration?.value} месяцев`,
							action: {
								type: ACTION.SET_DURATION,
								payload: { ...config.duration, value: config.duration?.max }
							}
						}
				  ]),
			...(config.employment
				? [
						{
							title: 'С трудоустройством',
							action: {
								type: ACTION.SET_EMPLOYMENT,
								payload: false
							}
						}
				  ]
				: [])
		]

		setTags(array)
	}, [])

	const handlerClearFilters = () => {
		// dispatch({ type: ACTION.SET_DIRECTION, payload: null })
		dispatch({ type: ACTION.SET_TYPE, payload: FilterTypeProgramEnum.all })
		dispatch({ type: ACTION.SET_PRICING, payload: null })
		dispatch({ type: ACTION.SET_EMPLOYMENT, payload: false })
		dispatch({
			type: ACTION.SET_DURATION,
			payload: {
				...config.duration,
				value: config.duration.max
			}
		})
	}

	const [rotate, setRotate] = useState(false)
	console.log('rotate: ', rotate)

	const handleRotate = () => {
		setRotate(true)
		setTimeout(() => {
			setRotate(false)
		}, 500)
	}

	return (
		<div className={cn(className, stls.content)} {...rest}>
			<ul className={stls.list}>
				{tags.map(tag => (
					<li className={stls.item} key={tag.title}>
						<Tag variant='theta'>
							<span className={stls.item__text}>{tag.title}</span>
							<button onClick={() => dispatch(tag.action)}>
								<IconCloseAlt className={stls.item__close} />
							</button>
						</Tag>
					</li>
				))}
				<li>
					<button
						className={stls.clearBtn}
						onClick={() => {
							handlerClearFilters()
							handleRotate()
						}}
					>
						Очистить фильтры{' '}
						<IconRefresh
							className={cn({
								[stls.rotate]: rotate
							})}
						/>
					</button>
				</li>
			</ul>
		</div>
	)
}
