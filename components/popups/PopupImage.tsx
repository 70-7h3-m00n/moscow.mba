import stls from '@/styles/components/popups/PopupImage.module.sass'
import Image from 'next/legacy/image'
import cn from 'classnames'
import { IconClose } from '@/components/icons'

const PopupImage = ({ closePopupImage, image }) => {
	return (
		<div
			className={cn({
				'popup-modal': true,
				'mfp-with-anim': true,
				[stls.container]: true
			})}>
			<div
				className={cn({
					'popup-content': true,
					'pdf-popup-content': true,
					'image-popup': true,
					[stls.image]: true
				})}>
				<Image
					src={image.path}
					width={image.fullWidth}
					height={image.FullHeight}
					layout={image.fu}
					alt={image.name}
				/>
			</div>
			<button className={stls.close} type='button' onClick={closePopupImage}>
				<IconClose stroke={'#eee'} />
			</button>
		</div>
	)
}

export default PopupImage
