import stls from './Dropdown.module.sass'
import cn from 'classnames'
import { DropdownProps } from './types'

import { useEffect, useState } from 'react'
import { IconSorting } from '@/components/icons/IconSorting/IconSorting'
import { motion } from 'framer-motion'

export const Dropdown = ({ className, menuItem, ...rest }: DropdownProps) => {
	const [isOpen, setOpen] = useState(false)

	const handlerMouseEnter = () => setOpen(true)
	const handlerMouseLeave = () => setOpen(false)

	useEffect(() => {
		document.addEventListener('mousedown', handlerMouseLeave)
		return () => document.removeEventListener('mousedown', handlerMouseLeave)
	}, [])

	return (
		<div className={stls.content} {...rest}>
			<button
				type='button'
				className={stls.button}
				onMouseEnter={handlerMouseEnter}
			>
				<span className={stls.button__title}>{menuItem.title}</span>
				<IconSorting className={cn(stls.arrow, { [stls.active]: isOpen })} />
			</button>
			{isOpen && (
				<motion.div
					className={stls.dropdown}
					onMouseLeave={handlerMouseLeave}
					initial={{
						scale: 0
					}}
					animate={{
						scale: 1
					}}
					transition={{
						type: 'spring',
						stiffness: 260,
						damping: 20
					}}
				>
					<ul className={stls.list}>
						{menuItem.list.map(item => (
							<li className={stls.item} key={item.title}>
								{item.title}
							</li>
						))}
					</ul>
				</motion.div>
			)}
		</div>
	)
}
