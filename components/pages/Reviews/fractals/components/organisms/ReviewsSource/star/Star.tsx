import { TypeColor } from '@/types/index'
import cn from 'classnames'
import { CSSProperties } from 'react'

type Props = {
	fill?: TypeColor
	classNames?: string[]
	style?: CSSProperties
	rating?: number
	id?: string
}

const Star = ({ classNames, fill = '#D9D9D9', style, rating, id }: Props) => {
	return (
		<span className={cn(classNames)}>
			<svg
				width='24'
				height='22'
				viewBox='0 0 24 22'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<defs>
					<linearGradient id={`gradient_${id}`}>
						<stop offset='0' stop-color={rating ? '#FF3535' : '#D9D9D9'} />
						{rating && (
							<>
								<stop offset={rating} stop-color='#FF3535' />
								<stop offset={rating} stop-color='#D9D9D9' />
							</>
						)}
						<stop offset={1} stop-color='#D9D9D9' />
					</linearGradient>
				</defs>
				<path
					d='M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z'
					fill={`url(#gradient_${id})`}
					style={style}
				/>
			</svg>
		</span>
	)
}

export default Star
