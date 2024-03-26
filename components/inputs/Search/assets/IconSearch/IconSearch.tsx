import cn from 'classnames'
import { SVGProps } from 'react'

export const IconSearch = ({ className, ...rest }: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			className={cn(className)}
			xmlns='http://www.w3.org/2000/svg'
			width='16'
			height='16'
			viewBox='0 0 16 16'
			fill='none'
			{...rest}
		>
			<g clipPath='url(#clip0_742_4117)'>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M2.08398 7.33333C2.08398 4.43383 4.43449 2.08333 7.33398 2.08333C10.2335 2.08333 12.584 4.43383 12.584 7.33333C12.584 10.2328 10.2335 12.5833 7.33398 12.5833C4.43449 12.5833 2.08398 10.2328 2.08398 7.33333ZM7.33398 0.583328C3.60606 0.583328 0.583984 3.60541 0.583984 7.33333C0.583984 11.0613 3.60606 14.0833 7.33398 14.0833C8.92774 14.0833 10.3925 13.531 11.5472 12.6073L13.8037 14.8637C14.0965 15.1566 14.5714 15.1566 14.8643 14.8637C15.1572 14.5708 15.1572 14.0959 14.8643 13.803L12.6079 11.5466C13.5316 10.3918 14.084 8.92709 14.084 7.33333C14.084 3.60541 11.0619 0.583328 7.33398 0.583328Z'
					fill='#FF3535'
				/>
			</g>
			<defs>
				<clipPath id='clip0_742_4117'>
					<rect width='16' height='16' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)
}
