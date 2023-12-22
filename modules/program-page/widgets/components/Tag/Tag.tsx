import stls from './Tag.module.sass'
import cn from 'classnames'
import { TagProps } from './types'

export const Tag = ({ className, children, variant }: TagProps) => {
	return (
		<div
			className={cn(className, stls.tag, {
				[stls.alpha]: variant === 'alpha', // no background white color white border
				[stls.beta]: variant === 'beta', // no background red color red border
				[stls.gamma]: variant === 'gamma', // pink background red color no border
				[stls.delta]: variant === 'delta', // red background white color no border
				[stls.epsilon]: variant === 'epsilon', // white background black color no border
				[stls.zeta]: variant === 'zeta' // yellow background orange color no border
			})}
		>
			{children}
		</div>
	)
}
