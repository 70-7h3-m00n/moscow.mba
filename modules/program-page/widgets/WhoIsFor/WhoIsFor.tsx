import stls from './WhoIsFor.module.sass'
import cn from 'classnames'
import { WhoIsForProps } from './types'

import { Wrapper } from '@/components/layout'

const data = [
	{
		title: 'Тем, кто хочет начать карьеру в fashion-дизайне',
		desc: 'После прохождения переподготовки в области цифровых трансформаций, студенты получают престижное удостоверение по востребованной специальности и возможность карьерного роста'
	},
	{
		title: 'Тем, кто хочет начать карьеру в fashion-дизайне',
		desc: 'После прохождения переподготовки в области цифровых трансформаций, студенты получают престижное удостоверение по востребованной специальности и возможность карьерного роста'
	}
]

export const WhoIsForNew = ({ className }: WhoIsForProps) => {
	return (
		<section className={cn(className, stls.container)}>
			<Wrapper classNames={[stls.content]}>
				<h2>Кому подойдет программа</h2>
				{data.map((item, idx) => (
					<div className={stls.item} key={idx}>
						<h3 className={stls.item__title}>{item.title}</h3>
						<p className={stls.item__desc}>{item.desc}</p>
					</div>
				))}
			</Wrapper>
		</section>
	)
}
