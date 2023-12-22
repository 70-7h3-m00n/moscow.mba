import stls from './Licence.module.sass'
import cn from 'classnames'
import { LicenceProps } from './types'

import Link from 'next/link'
import Image from 'next/image'
import licenseP1 from '@/public/assets/images/licence.png'

export const Licence = ({ className, ...rest }: LicenceProps) => {
	return (
		<div className={cn(className, stls.content)} {...rest}>
			<p className={stls.licenceText}>
				Государственная лицензия №041221 от 30.12.2020
			</p>
			<div className={stls.imageWrapper}>
				<Image
					className={stls.licenseImage}
					src={licenseP1}
					width={66}
					height={84}
					alt='Лицензия компании'
				/>
			</div>
			<p className={stls.requisites}>
				Автономная некоммерческая организация дополнительного профессионального
				образования «Московская бизнес академия», ИНН 9725034765, ОГРН
				1207700285143
			</p>
		</div>
	)
}
