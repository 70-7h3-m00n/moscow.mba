import stls from './Accordion.module.sass'
import cn from 'classnames'
import { AccordionProps } from './types'

import { motion } from 'framer-motion'
import React from 'react'
import { IconPlus } from '../components'

export const Accordion = ({
	className,
	item,
	active,
	handler,
	idx
}: AccordionProps) => {
	const { title, content } = item

	return (
		<div className={cn(className, stls.item)} onClick={() => handler(idx)}>
			<button className={stls.item__btn}>
				<span>{title}</span>
				<IconPlus />
			</button>

			<div
				className={cn(stls.item__content, {
					[stls.active]: active
				})}
			>
				{content}
			</div>
		</div>
	)
}
