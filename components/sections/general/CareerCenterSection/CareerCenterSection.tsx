import stls from './CareerCenterSection.module.sass'
import cn from 'classnames'
import { CareerCenterSectionProps } from './types'

import { Wrapper } from '@/components/layout'
import { IconPlanet } from '@/components/icons'

export const CareerCenterSection = ({
	className
}: CareerCenterSectionProps) => {
	return (
		<section className={cn(className, stls.container)}>
			<Wrapper classNames={[stls.wrapper]}>
				<div className={stls.mainBox}>
					<h3>Карьерный центр</h3>
					<p>
						Вы можете воспользоваться консультациями с HR-специалистами Центра
						развития карьеры Академии и изучить специальный курс по
						трудоустройству. Вы сможете улучшить резюме, оформить портфолио,
						составить карьерную стратегию, потренироваться в прохождении
						собеседований, получить персональную подборку вакансий и найти
						работу своей мечты
					</p>
				</div>
				<div className={stls.imageBox}>
					<IconPlanet />
				</div>
				<div className={stls.descriptionBox}>
					<p>
						Наш центр карьерного развития работает с любыми кейсами, в том числе
						со сменой профессии и с переходом с одного грейда на другой
					</p>
				</div>
			</Wrapper>
		</section>
	)
}
