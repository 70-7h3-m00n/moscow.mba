import stls from './Legal.module.sass'
import cn from 'classnames'
import { LegalProps } from './types'
import { legalData } from './constants'
import Link from 'next/link'

export const Legal = ({ className, ...rest }: LegalProps) => {
	return (
		<div className={cn(className, stls.content)} {...rest}>
			<ul className={stls.list}>
				{legalData.map((item, idx) => (
					<li key={idx}>
						<Link className={stls.link} href={item.src}>
							{item.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
