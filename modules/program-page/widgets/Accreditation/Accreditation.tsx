import stls from './Accreditation.module.sass'
import cn from 'classnames'
import { AccreditationProps } from './types'

import { Wrapper } from '@/components/layout'
import { AccreditationData } from './constants'

export const Accreditation = ({ className, ...rest }: AccreditationProps) => {
	const accreditationData = AccreditationData()

	return (
		<section className={cn(className, stls.container)} {...rest}>
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
					{accreditationData.map((item, idx) => (
						<li className={stls.item} key={idx}>
							<div className={stls.item__titleWrapper}>{item.title}</div>
							<p className={stls.item__desc}>{item.desc}</p>
						</li>
					))}
				</ul>
			</Wrapper>
		</section>
	)
}
