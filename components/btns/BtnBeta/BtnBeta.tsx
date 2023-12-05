import stls from './BtnBeta.module.sass'
import cn from 'classnames'
import { BtnBetaProps } from './types'

export const BtnBeta = ({
	className,
	children,
	variant,
	...rest
}: BtnBetaProps) => {
	return (
		<button
			className={cn(className, stls.btn, {
				[stls.alpha]: variant === 'alpha', // red background white color no border
				[stls.beta]: variant === 'beta' // no background white color white border
			})}
			{...rest}
		>
			{children}
		</button>
	)
}
