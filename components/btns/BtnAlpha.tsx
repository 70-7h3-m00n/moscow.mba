import stls from '@/styles/components/btns/BtnAlpha.module.sass'
import cn from 'classnames'

import { TypeBtn } from '@/types/index'
import Link from 'next/link'
import { getClassNames } from '@/helpers/index'

type TypeBtnAlphaProps = TypeBtn

const BtnAlpha = ({
	classNames,
	children,
	tag = 'button',
	href,
	target,
	type,
	disabled,
	ariaLabel,
	variant,
	onClick,
	scroll
}: TypeBtnAlphaProps) => {
	const isLink = tag === 'Link'

	const container =
		cn(
			stls.container,
			{
				[stls.alpha]: variant === 'alpha',
				[stls['alpha-reverse']]: variant === 'alpha-reverse',
				[stls.beta]: variant === 'beta',
				[stls['beta-reverse']]: variant === 'beta-reverse',
				[stls.gamma]: variant === 'gamma',
				[stls['gamma-reverse']]: variant === 'gamma-reverse',
				[stls.delta]: variant === 'delta',
				[stls['delta-reverse']]: variant === 'delta-reverse',
				[stls.epsilon]: variant === 'epsilon',
				[stls['epsilon-reverse']]: variant === 'epsilon-reverse',
				[stls.zeta]: variant === 'zeta',
				[stls['zeta-reverse']]: variant === 'zeta-reverse',
				[stls.disabled]: disabled
			},
			getClassNames({ classNames })
		) || undefined

	const ParentElement = isLink ? Link : tag
	return (
		// TODO: figure out the way to do this without ts expect error
		// // @ts-expect-error
		<ParentElement
			className={cn({ [container]: !isLink })}
			type={type}
			href={href}
			target={target}
			rel={target === '_blank' ? 'noopener noreferrer' : undefined}
			scroll={isLink ? scroll : undefined}
			aria-label={ariaLabel}
			disabled={disabled}
			aria-disabled={disabled}
			onClick={onClick}>
			{isLink ? <a className={container}>{children}</a> : children}
		</ParentElement>
	)
}

export default BtnAlpha
