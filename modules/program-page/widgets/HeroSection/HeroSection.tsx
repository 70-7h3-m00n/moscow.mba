import stls from './HeroSection.module.sass'
import cn from 'classnames'
import { HeroSectionProps } from './types'

// import Spline from '@splinetool/react-spline'
import { Wrapper } from '@/components/layout'
import Image from 'next/image'
import { Switch } from '../components/Switch/Switch'
import { Details } from '../components'
import { bottomList, data } from './constants'
import { IconFire, IconHeart } from './components'
import { BtnBeta } from '@/components/btns'

export const HeroSection = ({ className }: HeroSectionProps) => {
	return (
		<section className={cn(className, stls.container)}>
			<Wrapper classNames={[stls.content]}>
				<div className={stls.heroWrapper}>
					<div className={stls.tags}>
						<Switch className={stls.switch} />
					</div>
					<div className={stls.main}>
						<h1 className={stls.title}>{data.title}</h1>
						<p className={stls.description}>{data.description}</p>
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
