import stls from './Marquee.module.sass'
import cn from 'classnames'
import { MarqueeProps } from './types'

import { cities } from './constants'
import MarqueeComponent from 'react-fast-marquee'

export const Marquee = ({ className }: MarqueeProps) => {
	return (
		<div className={cn(className, stls.marquee)}>
			<MarqueeComponent autoFill>
				{cities.map((city, idx) => (
					<span className={stls.item} key={idx}>
						<span className={stls.round}></span>
						<span className={stls.city}>{city}</span>
					</span>
				))}
			</MarqueeComponent>
		</div>
	)
}
