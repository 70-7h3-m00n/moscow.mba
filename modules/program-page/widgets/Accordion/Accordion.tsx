import stls from './Accordion.module.sass'
import cn from 'classnames'

import React, { RefObject, useRef } from 'react'
import { IconPlus } from '../components'

export const Accordion = ({ item }) => {
	const { title, content } = item

	const active = true

	return (
		<div className={stls.item}>
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
