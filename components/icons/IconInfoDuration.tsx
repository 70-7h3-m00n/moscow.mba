import stls from '@/styles/components/icons/IconInfoDuration.module.sass'
import { TypeClassNames, TypeColor } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { IconContainer } from '@/components/layout'

// TODO: improve structure
const IconInfoDuration = ({ color = 'white', active = false }) => {
	return (
		<div className={stls.container}>
			<svg
				width='16'
				height='16'
				viewBox='0 0 16 16'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<g clipPath='url(#clip0_3284_1887)'>
					<path
						d='M7.9987 14.6663C11.6806 14.6663 14.6654 11.6816 14.6654 7.99967C14.6654 4.31778 11.6806 1.33301 7.9987 1.33301C4.3168 1.33301 1.33203 4.31778 1.33203 7.99967C1.33203 11.6816 4.3168 14.6663 7.9987 14.6663Z'
						stroke='white'
						fill={active ? color : 'none'}
						strokeWidth='1.5'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M8 10.6667V8'
						stroke={active ? colors.alpha : color}
						strokeWidth='1.5'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M8 5.33301H8.00667'
						stroke={active ? colors.alpha : color}
						strokeWidth='1.5'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</g>
				<defs>
					<clipPath id='clip0_3284_1887'>
						<rect width='16' height='16' fill='white' />
					</clipPath>
				</defs>
			</svg>
		</div>
	)
}

export default IconInfoDuration
