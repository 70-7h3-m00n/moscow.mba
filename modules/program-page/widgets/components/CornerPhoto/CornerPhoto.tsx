import stls from './CornerPhoto.module.sass'
import cn from 'classnames'
import { CornerPhotoProps } from './types'

import Image from 'next/image'
import { RevertedCorner } from '@/components/icons/geometrics/RevertedCorner/RevertedCorner'
import base64pixel from '@/config/base64pixel'
import { colors } from '../../Reviews/components/ReviewsCarousel/constants'

export const CornerPhoto = ({
	className,
	variant = 'top-left',
	size,
	src,
	name = 'a',
	bgColor = '#f8f8f8',
	...rest
}: CornerPhotoProps) => {
	const photoSize = size === 'l' ? 82 : size === 'm' ? 200 : 44

	const getRandomColor = (): string =>
		colors[Math.floor(Math.random() * colors.length)]

	return (
		<div
			className={cn(className, stls.content, {
				[stls.topLeft]: variant === 'top-left',
				[stls.topRight]: variant === 'top-right',
				[stls.topRightNoRevert]: variant === 'top-right' && size === 's'
			})}
			{...rest}
		>
			<RevertedCorner
				className={cn(stls.content__corner)}
				bgColor={bgColor}
				size={size}
			/>
			{src ? (
				<Image
					className={stls.content__image}
					src={src}
					width={photoSize}
					height={photoSize}
					quality={100}
					alt='Фото клиента'
					placeholder='blur'
					blurDataURL={base64pixel}
				/>
			) : (
				<>
					<div
						className={stls.noAvatar}
						style={{
							width: `${photoSize}px`,
							height: `${photoSize}px`,
							backgroundColor: `${getRandomColor()}`
						}}
					>
						{name.at(0)}
					</div>
				</>
			)}
		</div>
	)
}
