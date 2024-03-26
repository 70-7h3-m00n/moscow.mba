import stls from '../CtaForm.module.sass'

import Image from 'next/image'

export const CtaFormGamma = () => {
	return (
		<div className={stls.left__imageWrapper}>
			<Image
				className={stls.left__image}
				src={'/assets/images/program/cta-bg.png'}
				alt='Иконка'
				width={640}
				height={520}
			/>
		</div>
	)
}
