import stls from './AboutProgram.module.sass'
import cn from 'classnames'
import { AboutProgramProps } from './types'

import { Wrapper } from '@/components/layout'
import Image from 'next/image'

const data = [
	{
		title: 'Что такое MBA',
		description:
			'MBA (Master of Business Administration) — это квалификационная степень в менеджменте, которую получают в бизнес-школах. Программы обучения MBA подходят руководителям и менеджерам, которым необходимо развить управленческий навык и изучить актуальные инструменты для решения сложных бизнес-задач',
		image: '/assets/images/program/about-program-2.png',
		width: 180,
		height: 200
	},
	{
		title: 'Актуальность',
		description:
			'После прохождения переподготовки в области цифровых трансформаций, студенты получают престижное удостоверение по востребованной специальности и возможность карьерного роста',
		image: '/assets/images/program/about-program-1.png',
		width: 200,
		height: 156
	}
]

export const AboutProgram = ({ className }: AboutProgramProps) => {
	return (
		<section className={cn(className, stls.container)}>
			<Wrapper classNames={[stls.content]}>
				<h2 className={stls.title}>О программе</h2>
				<ul className={stls.list}>
					{data.map((item, idx) => (
						<li className={stls.item} key={idx}>
							<h3 className={stls.item__title}>{item.title}</h3>
							<Image
								className={stls.item__image}
								src={item.image}
								alt={'Иконка актуальность'}
								width={item.width}
								height={item.height}
							/>
							<p className={stls.item__description}>{item.description}</p>
						</li>
					))}
				</ul>
			</Wrapper>
		</section>
	)
}
