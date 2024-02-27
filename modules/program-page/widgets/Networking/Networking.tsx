import stls from './Networking.module.sass'
import cn from 'classnames'
import { NetworkingProps } from './types'

import { Wrapper } from '@/components/layout'
import { dataNetworking } from './constants'
import { BtnBeta } from '@/components/btns'

export const Networking = ({ className, ...rest }: NetworkingProps) => {
	return (
		<section className={cn(className, stls.container)} {...rest}>
			<Wrapper classNames={[stls.content]}>
				<h2 className={stls.title}>Нетворкинг: общение и обмен опытом</h2>
				<ul className={stls.list}>
					{dataNetworking.map((item, idx) => (
						<li className={stls.item} key={idx}>
							{item.image}
							<p className={stls.item__title}>{item.title}</p>
							<div className={stls.item__desc}>{item.desc}</div>
							{item.bigImage}
						</li>
					))}
				</ul>
				{/* <BtnBeta variant='beta'>Корпоративное обучение</BtnBeta> */}
			</Wrapper>
		</section>
	)
}
