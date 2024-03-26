import stls from './FilterTags.module.sass'
import cn from 'classnames'
import { FilterTagsProps, TagsType } from './types'

import { Tag } from 'modules/program-page/widgets'
import { IconCloseAlt, IconRefresh } from '@/components/icons'
import { ACTION } from 'modules/programs-page-alt/fractals/context/reducer'
import { FilterTypeProgramEnum } from 'modules/programs-page-alt/fractals'
import { useContext, useEffect, useState } from 'react'
import { ProgramsPageContext } from 'modules/programs-page-alt/fractals/context/context'
import useAt from '@/hooks/useAt'
import { motion } from 'framer-motion'

export const FilterTags = ({ className, ...rest }: FilterTagsProps) => {
	const at = useAt()
	const { state, dispatch } = useContext(ProgramsPageContext)
	const { programsConfig, durationConfig } = state
	const [tags, setTags] = useState<TagsType[]>([])

	useEffect(() => {
		const array: TagsType[] = [
			...(programsConfig.type === FilterTypeProgramEnum.all
				? []
				: [
						{
							title:
								programsConfig.type === 'mba'
									? 'MBA'
									: programsConfig.type === 'mini'
									? 'Mini MBA'
									: programsConfig.type === 'course'
									? 'Курс'
									: programsConfig.type === 'profession'
									? 'Профессия'
									: '',
							action: {
								type: ACTION.SET_TYPE,
								payload: FilterTypeProgramEnum.all
							}
						}
				  ]),
			...(durationConfig?.max === programsConfig?.duration
				? []
				: [
						{
							title: `От ${durationConfig?.min} до ${programsConfig?.duration} месяцев`,
							action: {
								type: ACTION.SET_DURATION,
								payload: durationConfig?.max
							}
						}
				  ]),
			...(programsConfig.employment &&
			state.programsConfig.type !== FilterTypeProgramEnum.mba &&
			state.programsConfig.type !== FilterTypeProgramEnum.mini
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
	}, [durationConfig?.max, durationConfig?.min, programsConfig])

	const handlerClearFilters = () => {
		dispatch({ type: ACTION.SET_EMPLOYMENT, payload: false })
		dispatch({ type: ACTION.SET_TYPE, payload: FilterTypeProgramEnum.all })
		dispatch({ type: ACTION.SET_DIRECTION, payload: null })
		dispatch({ type: ACTION.SET_PRICING, payload: null })
		dispatch({
			type: ACTION.SET_DURATION,
			payload: durationConfig?.max
		})
	}

	const [rotate, setRotate] = useState(false)
	// console.log('FilterTags rerender ->>>: ')

	const handleRotate = () => {
		setRotate(true)
		setTimeout(() => {
			setRotate(false)
		}, 500)
	}

	return (
		<div className={cn(className, stls.content)} {...rest}>
			<motion.ul className={stls.list} layout>
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
				<motion.li layout>
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
				</motion.li>
			</motion.ul>
		</div>
	)
}
