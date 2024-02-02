import stls from '../CtaForm.module.sass'
import cn from 'classnames'

import Image from 'next/image'

export const CtaFormBeta = () => {
	return (
		<div className={stls.left__imageWrapper}>
			<Image
				className={stls.left__image}
				src={'/assets/images/program/cta-beta-arrow.svg'}
				alt='Иконка'
				width={221}
				height={221}
			/>
			<Image
				className={cn(stls.left__image, stls.left__imageRotate)}
				src={'/assets/images/program/cta-beta-arrow.svg'}
				alt='Иконка'
				width={221}
				height={221}
			/>
			<Image
				className={stls.left__3d}
				src={'/assets/images/program/cta-beta-3d.svg'}
				alt='Иконка'
				width={316}
				height={295}
			/>
		</div>
	)
}
