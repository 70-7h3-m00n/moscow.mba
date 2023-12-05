import stls from './Networking.module.sass'
import cn from 'classnames'
import { NetworkingProps } from './types'

import { Wrapper } from '@/components/layout'
import { data } from './constants'
import { BtnBeta } from '@/components/btns'

export const Networking = ({ className }: NetworkingProps) => {
	return (
		<section className={cn(className, stls.container)}>
			<Wrapper classNames={[stls.content]}>
				<h2 className={stls.title}>Нетворкинг: общение и обмен опытом</h2>
				<ul className={stls.list}>
					{data.map((item, idx) => (
						<li className={stls.item} key={idx}>
							<h3 className={stls.item__title}>{item.title}</h3>
							<p className={stls.item__desc}>{item.desc}</p>
						</li>
					))}
				</ul>
				<BtnBeta variant='beta'>Корпоративное обучение</BtnBeta>
			</Wrapper>
		</section>
	)
}
