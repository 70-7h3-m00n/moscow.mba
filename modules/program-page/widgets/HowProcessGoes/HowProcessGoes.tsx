import stls from './HowProcessGoes.module.sass'
import cn from 'classnames'
import { HowProcessGoesProps } from './types'

import { Wrapper } from '@/components/layout'
import { IconCheck } from '../components/icons/IconCheck/IconCheck'

const data = [
	{ title: 'Поступление' },
	{ title: 'Регистрация' },
	{ title: 'Теория' },
	{ title: 'Практика' },
	{ title: 'Обратная связь' },
	{ title: 'Поддержка' }
]

export const HowProcessGoesNew = ({ className }: HowProcessGoesProps) => {
	return (
		<section className={cn(className, stls.container)}>
			<Wrapper classNames={[stls.content]}>
				<h2>Как проходит обучение</h2>
				<div className={stls.pagination}>
					<ul className={stls.pagination__list}>
						{data.map((item, idx) => (
							<li className={stls.pagination__item} key={idx}>
								<IconCheck />
								<p>{item.title}</p>
							</li>
						))}
					</ul>
				</div>
				<div className={stls.slides}>
					<div className={stls.slide}>
						<div className={stls.slide__content}>
							<h3 className={stls.slide__title}>Выполняйте задания</h3>
							<p className={stls.slide__desc}>
								Вы сможете отточить полученные навыки на групповых проектах и
								практических заданиях, приближенных к формату реальных задач. Мы
								ежегодно обновляем учебные планы, чтобы вы получали навыки,
								которые нужны работодателям
							</p>
						</div>
					</div>
				</div>
			</Wrapper>
		</section>
	)
}
