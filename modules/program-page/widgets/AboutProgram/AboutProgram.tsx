import stls from './AboutProgram.module.sass'
import cn from 'classnames'
import { AboutProgramProps } from './types'

import Image from 'next/image'
import { Wrapper } from '@/components/layout'
import { cardsData } from './constants'
import { PhotoSlider } from '../PhotoSlider/PhotoSlider'
import useAt from '@/hooks/useAt'
import { useContext } from 'react'
import { ProgramPageContext } from 'modules/program-page/fractals/context/context'

export const AboutProgram = ({ className, ...rest }: AboutProgramProps) => {
	const at = useAt()
	const { state } = useContext(ProgramPageContext)
	const { program } = state

	const leftCardData = at.mba
		? cardsData.mba
		: at.mini
		? cardsData.mini
		: {
				title: 'Цель',
				description: program.goal || ''
		  }

	return (
		<section className={cn(className, stls.container)} {...rest}>
			<Wrapper classNames={[stls.content]}>
				<h2 className={stls.title}>О программе</h2>
				<ul className={stls.list}>
					<li className={stls.item}>
						<h3 className={stls.item__title}>{cardsData.mba.title}</h3>
						<Image
							className={stls.item__image}
							src='/assets/images/program/about-program-2.png'
							alt='Иконка программа'
							width={180}
							height={200}
						/>
						<p className={stls.item__description}>{leftCardData.description}</p>
					</li>
					<li className={stls.item}>
						<h3 className={stls.item__title}>{cardsData.actual.title}</h3>
						<Image
							className={stls.item__image}
							src='/assets/images/program/about-program-1.png'
							alt='Иконка актуальность'
							width={200}
							height={156}
						/>
						<p className={stls.item__description}>
							{`${
								program?.actualInformation?.description ||
								cardsData.actual.description
							}`}
						</p>
					</li>
				</ul>
				<PhotoSlider className={stls.photoSlider} />
			</Wrapper>
		</section>
	)
}
