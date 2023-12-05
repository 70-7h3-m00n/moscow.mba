import stls from './Accreditation.module.sass'
import cn from 'classnames'
import { AccreditationProps } from './types'

import { Wrapper } from '@/components/layout'

const data = [
	{
		title: 'ТОП-3',
		desc: 'Входим в ТОП-3 бизнес-школ РФ по актуальности контента',
		icon: <></>
	},
	{
		title: 'РАБО',
		desc: 'Российская ассоциация бизнес образования',
		icon: <></>
	},
	{
		title: 'НАСДОБР',
		desc: 'Национального аккредитационного совета делового образования',
		icon: <></>
	}
]

export const Accreditation = ({ className }: AccreditationProps) => {
	return (
		<section className={cn(className, stls.container)}>
			<Wrapper classNames={[stls.content]}>
				<h2 className={stls.title}>Аккредитации</h2>

				<ul className={stls.list}>
					<li className={stls.left}>
						<p className={stls.left__subtitle}>
							Обучение по программам MBA в Московской Бизнес Академии проходит
							на базе всех необходимых лицензий и аккредитации, которые дают
							право на осуществление образовательной деятельности
						</p>
						<div className={stls.left__wrapper}>
							<p className={stls.left__desc}>
								У Московской Бизнес Академии есть государственная лицензия на
								образовательную деятельность №041221
							</p>
						</div>
					</li>
					{data.map((item, idx) => (
						<li className={stls.item} key={idx}>
							<h3 className={stls.item__title}>{item.title}</h3>
							<p className={stls.item__desc}>{item.desc}</p>
						</li>
					))}
				</ul>
			</Wrapper>
		</section>
	)
}
