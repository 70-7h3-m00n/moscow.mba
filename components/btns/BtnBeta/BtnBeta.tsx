import stls from './BtnBeta.module.sass'
import cn from 'classnames'
import { BtnBetaProps } from './types'
import { forwardRef } from 'react'

const Btn = ({
	className,
	children,
	variant,
	size = 'm',
	...rest
}: BtnBetaProps) => {
	return (
		<button
			className={cn(className, stls.btn, {
				[stls.alpha]: variant === 'alpha', // red background white color no border
				[stls.beta]: variant === 'beta', // no background white color white border
				[stls.gamma]: variant === 'gamma', // black background white color white border
				[stls.small]: size === 's'
			})}
			{...rest}
		>
			{children}
		</button>
	)
}

export const BtnBeta = forwardRef(Btn)
