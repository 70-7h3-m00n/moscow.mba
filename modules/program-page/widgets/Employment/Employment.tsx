import stls from './Employment.module.sass'
import cn from 'classnames'
import { EmploymentProps } from './types'

import { Wrapper } from '@/components/layout'
import Image from 'next/image'
import { GridIcons } from '../components/GridIcons/GridIcons'
import { EmploymenIcons } from '../components/EmploymenIcons/EmploymenIcons'

const data = [
	{
		title: 'Оформите резюме',
		desc: 'Научим выгодно презентовать свои сильные стороны и грамотно составлять резюме',
		background: (
			<Image
				className={stls.item__background}
				src={'/assets/images/program/employment-bg-1.png'}
				alt='Оформите резюме'
				width={650}
				height={500}
			/>
		)
	},
	{
		title: 'Конкурентное портфолио',
		desc: 'Поможем оформить кейсы в презентабельное портфолио и подскажем площадки для публикаций',
		background: <GridIcons variant='beta' />
	},
	{
		title: 'Прохождение собеседований',
		desc: 'Расскажем, как успешно подготовиться к собеседованию в компаниях-партнерах',
		background: <EmploymenIcons />
	},
	{
		title: 'Научитесь работать на себя',
		desc: 'Подскажем, где искать клиентов, как построить коммуникацию с заказчиком и обезопасить сделку',
		background: (
			<Image
				className={stls.item__background}
				src={'/assets/images/program/employment-bg-2.svg'}
				alt='Оформите резюме'
				width={882}
				height={579}
			/>
		)
	}
]

export const Employment = ({ className }: EmploymentProps) => {
	return (
		<section className={cn(className, stls.container)}>
			<Wrapper classNames={[stls.content]}>
				<h2 className={stls.title}>Помогаем в трудоустройстве</h2>
				<ul className={stls.list}>
					{data.map((item, idx) => (
						<li className={stls.item} key={idx}>
							{item.background}
							<div className={stls.item__content}>
								<h3 className={stls.item__title}>{item.title}</h3>
								<p className={stls.item__desc}>{item.desc}</p>
							</div>
						</li>
					))}
				</ul>
			</Wrapper>
		</section>
	)
}
