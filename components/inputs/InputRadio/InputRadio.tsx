import stls from './InputRadio.module.sass'
import cn from 'classnames'
import { InputrRadioProps } from './types'

export const InputRadioNew = ({
	className,
	register,
	variant
}: InputrRadioProps) => {
	return (
		<div className={cn(className, stls.content)}>
			<p className={stls.title}>Как с вами связаться?</p>
			<div className={stls.labelWrapper}>
				<label
					className={cn(
						stls.label,
						{ [stls.alpha]: variant === 'alpha' },
						{ [stls.beta]: variant === 'beta' },
						{ [stls.gamma]: variant === 'gamma' }
					)}
				>
					<input
						className={stls.radio}
						type='radio'
						name='radio'
						value='По телефону'
						defaultChecked={true}
						{...register('radio')}
					/>
					<svg
						className={stls.customRadio}
						viewBox='0 0 64 64'
						height='1.5rem'
						width='1.5rem'
					>
						<path
							d='M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16'
							pathLength='575.0541381835938'
							className={stls.path}
						></path>
					</svg>
					<span>По телефону</span>
				</label>
				<label
					className={cn(
						stls.label,
						{ [stls.alpha]: variant === 'alpha' },
						{ [stls.beta]: variant === 'beta' },
						{ [stls.gamma]: variant === 'gamma' }
					)}
				>
					<input
						className={stls.radio}
						type='radio'
						name='radio'
						value='В мессенджере'
						{...register('radio')}
					/>
					<svg
						className={stls.customRadio}
						viewBox='0 0 64 64'
						height='1.5rem'
						width='1.5rem'
					>
						<path
							d='M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16'
							pathLength='575.0541381835938'
							className={stls.path}
						></path>
					</svg>
					<span>В мессенджере</span>
				</label>
			</div>
		</div>
	)
}
