import stls from './HeroSection.module.sass'
import cn from 'classnames'
import { HeroSectionProps } from './types'

// import Spline from '@splinetool/react-spline'
import { Wrapper } from '@/components/layout'
import Image from 'next/image'
import { Switch } from '../components/Switch/Switch'
import { Details } from '../components'
import { bottomList } from './constants'
import { IconFire, IconHeart } from './components'
import { BtnBeta } from '@/components/btns'
import { ProgramPageContext } from 'modules/program-page/fractals/context/context'
import { useContext, useState } from 'react'
import useAt from '@/hooks/useAt'
import { useRouter } from 'next/router'
import { ContextStaticProps } from '@/context/index'

export const HeroSection = ({ className }: HeroSectionProps) => {
	const at = useAt()
	const router = useRouter()
	const { programs } = useContext(ContextStaticProps)

	const { state } = useContext(ProgramPageContext)
	const { program } = state

	const description =
		program?.description ||
		'Оставьте заявку и получите консультацию по программе, а также узнайте возможные варианты скидок и требования к поступлению'

	return (
		<section className={cn(className, stls.container)}>
			<Wrapper classNames={[stls.content]}>
				<div className={stls.heroWrapper}>
					<div className={stls.tags}>
						<Switch className={stls.switch} />
					</div>
					<div className={stls.main}>
						<h1 className={stls.title}>{program?.title}</h1>
						<p className={stls.description}>{description}</p>
						<div className={stls.main__btnWrapper}>
							<BtnBeta variant='alpha'>Оставить заявку</BtnBeta>
							<BtnBeta variant='beta'>Задать вопрос</BtnBeta>
						</div>
					</div>
					<div className={stls.rating}>
						<div>
							<IconHeart />
							<span className={stls.rating__counter}>4,5</span>
						</div>
						<p className={stls.rating__desc}>
							на отзовике IRecommended и TutorTop
						</p>
					</div>
					<div className={stls.students}>
						<div>
							<IconFire />
							<span className={stls.students__counter}>10 000 +</span>
						</div>
						<p className={stls.students__desc}>
							выпускников нашли работу после обучения
						</p>
					</div>
					<Details className={stls.details} />
				</div>
				<div className={stls.cornerPhoto}>
					<Image
						src='/assets/images/program/hero-image.png'
						width={82}
						height={82}
						alt='Фото клиента'
					/>
				</div>
				<ul className={stls.bottomList}>
					{bottomList.map((item, idx) => (
						<li className={stls.bottomItem} key={idx}>
							{item}
						</li>
					))}
				</ul>
			</Wrapper>
		</section>
	)
}
