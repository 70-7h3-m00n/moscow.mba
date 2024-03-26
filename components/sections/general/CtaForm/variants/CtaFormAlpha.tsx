import stls from '../CtaForm.module.sass'

import Image from 'next/image'
import { GridIcons } from '../../../../../modules/program-page/widgets/components/GridIcons/GridIcons'

export const CtaFormAlpha = () => {
	return (
		<div className={stls.left__imageWrapper}>
			<Image
				className={stls.left__image}
				src={'/assets/images/program/cta-form-icon-1.svg'}
				alt='Иконка'
				width={250}
				height={216}
			/>
			<GridIcons variant='alpha' />
		</div>
	)
}
