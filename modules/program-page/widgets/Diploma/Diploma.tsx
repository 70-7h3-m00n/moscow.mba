import stls from './Diploma.module.sass'
import cn from 'classnames'
import { DiplomaProps } from './types'

import { Wrapper } from '@/components/layout'
import { BtnBeta } from '@/components/btns'

export const Diploma = ({ className }: DiplomaProps) => {
	return (
		<section className={cn(className, stls.container)}>
			<Wrapper classNames={[stls.content]}>
				<h2 className={stls.title}>
					Выдаем официальный диплом, чтобы подтвердить квалификацию
				</h2>
				<p className={stls.desc}>
					Мы ведем образовательную деятельность на основании государственной
					лицензии № 41 164 от 15 декабря 2020 г
				</p>

				<BtnBeta variant='beta'>Посмотреть дипломы</BtnBeta>
			</Wrapper>
		</section>
	)
}
