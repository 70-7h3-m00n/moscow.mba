import stls from './Employment.module.sass'
import cn from 'classnames'
import { EmploymentProps } from './types'

import { Wrapper } from '@/components/layout'
import { GetEmploymentData } from './fractals/GetEmploymentData'

export const Employment = ({ className, ...rest }: EmploymentProps) => {
	const employmentData = GetEmploymentData()

	return (
		<section className={cn(className, stls.container)} {...rest}>
			<Wrapper classNames={[stls.content]}>
				<h2 className={stls.title}>Помогаем в трудоустройстве</h2>
				<ul className={stls.list}>
					{employmentData.map((item, idx) => (
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
