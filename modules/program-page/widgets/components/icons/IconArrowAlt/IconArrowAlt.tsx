import cn from 'classnames'
import { SVGProps } from 'react'

export const IconArrowAlt = ({
	className,
	status = 'default',
	direction = 'right',
	variant = 'alpha',
	...rest
}: SVGProps<SVGSVGElement> & {
	status?: 'active' | 'default' | 'disabled'
	direction?: 'left' | 'right' | 'up' | 'down'
	variant?: 'alpha' | 'beta'
}) => {
	const variants = {
		alpha: {
			default: '#18191A',
			arrow: '#fff',
			active: '#FF3535',
			disabled: '#A1A6B0'
		},
		beta: {
			default: '#fff',
			arrow: '#18191A',
			active: '#FF3535',
			disabled: '#A1A6B0'
		}
	}

	const bgColor = variants[variant][status]
	const arrowColor = variants[variant].arrow

	return (
		<svg
			className={cn(className)}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill={bgColor}
			style={{
				transition: 'transform .3s ease-in-out, fill .3s ease-in-out',
				transform:
					direction === 'left'
						? 'rotate(-90deg)'
						: direction === 'right'
						? 'rotate(90deg)'
						: direction === 'down'
						? 'rotate(180deg)'
						: 'rotate(0deg)'
			}}
			{...rest}
		>
			<circle cx='12' cy='12' r='12' transform='rotate(-90 12 12)' />
			<path
				style={{
					transition: 'stroke .3s ease-in-out, fill .3s ease-in-out'
				}}
				d='M14.9058 13.8967L14.906 13.8969C15.0369 14.027 15.2139 14.1 15.3985 14.1C15.5829 14.1 15.7598 14.0271 15.8907 13.8971C15.9566 13.8325 16.009 13.7554 16.0449 13.6704C16.0809 13.5852 16.0996 13.4938 16.1 13.4014L16.1 13.4006C16.0996 13.3081 16.0809 13.2167 16.0449 13.1316C16.009 13.0466 15.9566 12.9696 15.8908 12.905C15.8907 12.9049 15.8906 12.9047 15.8904 12.9046L12.5108 9.51895C12.4456 9.44875 12.3667 9.39269 12.279 9.35426C12.1906 9.31556 12.0952 9.29558 11.9987 9.29558C11.9023 9.29558 11.8068 9.31556 11.7185 9.35426C11.6307 9.39269 11.5519 9.44875 11.4867 9.51896L8.10663 12.905C8.10657 12.9051 8.10651 12.9051 8.10645 12.9052C8.04106 12.9701 7.98916 13.0473 7.95372 13.1323C7.91826 13.2175 7.9 13.3088 7.9 13.401C7.9 13.4932 7.91826 13.5845 7.95372 13.6696C7.98919 13.7548 8.04115 13.832 8.10663 13.8969L8.17705 13.8259L8.10655 13.8969C8.23743 14.027 8.41448 14.1 8.59902 14.1C8.78353 14.1 8.96055 14.027 9.09143 13.8969C9.09145 13.8969 9.09147 13.8969 9.09149 13.8969L12.0134 11.0042L14.9058 13.8967Z'
				fill={arrowColor}
				stroke={bgColor}
				strokeWidth='0.2'
			/>
		</svg>
	)
}
