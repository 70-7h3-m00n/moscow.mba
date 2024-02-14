import stls from './Diploma.module.sass'
import cn from 'classnames'
import { DiplomaProps } from './types'

import { Wrapper } from '@/components/layout'
import { BtnBeta } from '@/components/btns'
import useAt from '@/hooks/useAt'
import { diplomaData } from './constants'
import Image from 'next/image'
import { DiplomaPopup } from './DiplomaPopup/DiplomaPopup'

export const Diploma = ({ className, ...rest }: DiplomaProps) => {
	const at = useAt()

	const data = at.mba
		? diplomaData.mba
		: at.mini
		? diplomaData.mini
		: at.profession
		? diplomaData.profession
		: diplomaData.course

	return (
		<section className={cn(className, stls.container)} {...rest}>
			<Wrapper classNames={[stls.content]}>
				<div>
					<h2 className={stls.title}>Документы после обучения</h2>
					<p className={stls.desc}>{data.description}</p>
					{(at.profession || at.course) && (
						<p className={cn(stls.desc, stls.license)}>
							Мы обучаем{' '}
							<a
								className={stls.link}
								href='https://islod.obrnadzor.gov.ru/rlic/details/2df11621-2d30-4173-9389-2fecc24a7639/'
								target='_blank'
							>
								по государственной лицензии №041221
							</a>
						</p>
					)}
					<DiplomaPopup />
				</div>
				<div className={stls.imageWrapper}>
					<Image
						className={stls.image}
						src={data.src}
						fill
						alt={'Документы после обучения'}
					/>
				</div>
			</Wrapper>
		</section>
	)
}
