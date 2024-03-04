import stls from './Navigation.module.sass'
import cn from 'classnames'
import { NavigationProps } from './types'

import { navList } from './constants'
import Link from 'next/link'
import { Fragment } from 'react'

export const Navigation = ({ className, ...rest }: NavigationProps) => {
	return (
		<div className={cn(className, stls.content)} {...rest}>
			{navList.map((navItem, idx) => (
				<div key={idx}>
					<p className={stls.list__title}>{navItem.title}</p>
					<ul className={stls.list} key={idx}>
						{navItem.list.map((link, idx) => (
							<li className={stls.list__item} key={idx}>
								<Link className={stls.list__link} href={link.src}>
									{link.item}
								</Link>
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	)
}
