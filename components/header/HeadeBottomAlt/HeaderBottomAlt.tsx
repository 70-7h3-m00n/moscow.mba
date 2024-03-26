import stls from './HeaderBottomAlt.module.sass'
import cn from 'classnames'
import { HeaderBottomAltProps } from './types'

import Link from 'next/link'
import { IconPrograms } from '@/components/icons/IconPrograms/IconPrograms'
import { Dropdown } from '../Dropdown/Dropdown'
import { menuData } from './constants'

export const HeaderBottomAlt = ({
	className,
	...rest
}: HeaderBottomAltProps) => {
	return (
		<div className={cn(className, stls.content)} {...rest}>
			<div className={stls.programs}>
				<Link className={stls.programs__link} href={'#'}>
					<IconPrograms />
					<span>Программы</span>
				</Link>
			</div>
			<nav className={stls.nav}>
				<ul className={stls.nav__list}>
					{menuData.map(item =>
						item.list ? (
							<li className={stls.nav__item} key={item.title}>
								<Dropdown className={stls.nav__dropdown} menuItem={item} />
							</li>
						) : (
							<li className={stls.nav__item} key={item.title}>
								<Link className={stls.nav__link} href={item.src}>
									{item.title}
								</Link>
							</li>
						)
					)}
				</ul>
			</nav>
		</div>
	)
}
