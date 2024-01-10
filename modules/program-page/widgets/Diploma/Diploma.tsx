import stls from './Diploma.module.sass'
import cn from 'classnames'
import { DiplomaProps } from './types'

import { Wrapper } from '@/components/layout'
import { BtnBeta } from '@/components/btns'
import useAt from '@/hooks/useAt'
import { diplomaData } from './constants'

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
				<h2 className={stls.title}>Документы после обучения</h2>
				<p className={stls.desc}>{data.description}</p>
				{(at.profession || at.course) && (
					<p className={stls.desc}>
						Мы обучаем{' '}
						<a className={stls.link} href='' target='_blank'>
							по государственной лицензии №041221
						</a>
					</p>
				)}
				<BtnBeta className={stls.btn} variant='beta'>
					Посмотреть дипломы
				</BtnBeta>
			</Wrapper>
		</section>
	)
}
