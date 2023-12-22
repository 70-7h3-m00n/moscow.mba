import stls from './AboutProgram.module.sass'
import cn from 'classnames'
import { AboutProgramProps } from './types'

import Image from 'next/image'
import { Wrapper } from '@/components/layout'
import { cardsData } from './constants'
import { PhotoSlider } from '../PhotoSlider/PhotoSlider'

export const AboutProgram = ({ className }: AboutProgramProps) => {
	return (
		<section className={cn(className, stls.container)}>
			<Wrapper classNames={[stls.content]}>
				<h2 className={stls.title}>О программе</h2>
				<ul className={stls.list}>
					{cardsData.map((item, idx) => (
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
				<PhotoSlider />
			</Wrapper>
		</section>
	)
}
