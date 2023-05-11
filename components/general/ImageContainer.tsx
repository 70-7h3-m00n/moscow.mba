import stls from '@/styles/components/general/ImageContainer.module.sass'
import Image from 'next/legacy/image'
import Popup from 'reactjs-popup'
import PopupImage from '@/components/popups/PopupImage'
import { IconPaperCorner } from '@/components/icons'

const ImageContainer = ({ image, imageWidth, imageHeight }) => {
	const container = (
		<div className={`${stls.imageContainer} trigger`}>
			<Image
				width={imageWidth}
				height={imageHeight}
				placeholder='blur'
				src={image.path}
				alt={image.name}
			/>
			<div className={stls.imageLinkContainer}>
				<IconPaperCorner fill='#000' />
				<a>{image.name}</a>
			</div>
		</div>
	)

	return (
		<Popup
			trigger={container}
			className='image-popup'
			modal
			lockScroll
			nested
			closeOnDocumentClick>
			{/* @ts-expect-error  */}
			{close => <PopupImage closePopupImage={close} image={image} />}
		</Popup>
	)
}

export default ImageContainer
