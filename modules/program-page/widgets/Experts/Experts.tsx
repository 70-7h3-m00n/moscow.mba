import stls from './Experts.module.sass'
import cn from 'classnames'
import { ExpertsProps } from './types'

import { Wrapper } from '@/components/layout'
import Image from 'next/image'

const data = [
	{
		name: 'Анна Андреева',
		desc: 'Креативный директор DADA Agency, нейрохудожник и автор канала Ai molodca',
		image: '/assets/images/program/experts-1.png'
	}
]

export const ExpertsNew = ({ className }: ExpertsProps) => {
	return (
		<section className={cn(className, stls.container)}>
			<Wrapper classNames={[stls.content]}>
				<h2 className={stls.title}>
					Российские и зарубежные эксперты программы
				</h2>
				<div className={stls.slider}>
					<ul className={stls.slider__list}>
						{data.map((item, idx) => (
							<li className={stls.slider__item} key={idx}>
								<Image
									src={item.image}
									alt={item.name}
									width={318}
									height={416}
								/>
								<p>{item.name}</p>
								<p>{item.desc}</p>
							</li>
						))}
					</ul>
				</div>
			</Wrapper>
		</section>
	)
}
