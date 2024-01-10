import stls from './CornerPhoto.module.sass'
import cn from 'classnames'
import { CornerPhotoProps } from './types'

import Image from 'next/image'

export const CornerPhoto = ({
	src,
	children,
	className,
	...rest
}: CornerPhotoProps) => {
	return (
		<div className={cn(className, stls.content)} {...rest}>
			{children}
			<div className={stls.cornerPhoto}>
				<Image
					className={stls.cornerPhoto__image}
					src={src}
					fill
					alt='Фото клиента'
				/>
			</div>
		</div>
	)
}
