import { TypeColor } from '@/types/index'
import cn from 'classnames'

type Props = {
	classNames?: string[]
	fillInner?: TypeColor
	fillOuter?: TypeColor
}

const IconYoutube = ({
	classNames,
	fillInner = '#fff',
	fillOuter = '#262626'
}: Props) => {
	return (
		<span className={cn(classNames)}>
			<svg
				width='20'
				height='20'
				viewBox='0 0 20 20'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				aria-label={'Youtube'}>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M3.08185 0H16.9182C18.6202 0 20 1.3798 20 3.08185V16.9182C20 18.6202 18.6202 20 16.9182 20H3.08185C1.3798 20 0 18.6202 0 16.9182V3.08185C0 1.3798 1.3798 0 3.08185 0Z'
					fill={fillOuter}
				/>
				<path
					d='M7.19922 14.1699L15.4255 9.88492L7.19922 5.59985V14.1699Z'
					fill={fillInner}
				/>
			</svg>
		</span>
	)
}

export default IconYoutube
