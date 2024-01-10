import stls from './HeroSection.module.sass'
import cn from 'classnames'
import { HeroSectionProps } from './types'

import { Wrapper } from '@/components/layout'
import Image from 'next/image'
import { Switch } from '../components/Switch/Switch'
import { Details, Tag } from '../components'
import { IconFire, IconHeart } from './components'
import { BtnBeta } from '@/components/btns'
import { ProgramPageContext } from 'modules/program-page/fractals/context/context'
import { useContext } from 'react'
import { PlacesLeft, Until } from '@/components/costs'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

const stringDate = format(new Date(), 'LLLL yyyy', { locale: ru })

export const HeroSection = ({ className, ...rest }: HeroSectionProps) => {
	const { state } = useContext(ProgramPageContext)
	const { program } = state

	const advantagesArray = program?.heroAdvantages
		?.map((el, idx) => (idx < 5 ? el.string : undefined))
		.filter(Boolean)

	return (
		<section className={cn(className, stls.container)} {...rest}>
			<Wrapper classNames={[stls.content]}>
				<div className={stls.heroWrapper}>
					<div className={stls.tags}>
						<Switch className={stls.switch} />
					</div>
					<div className={stls.detailsMobile}>
						{program?.partnership && program?.partnership?.url && (
							<div className={stls.banner}>
								<Image
									src={program?.partnership?.url}
									width={40}
									height={40}
									alt={program?.partnership?.string}
								/>
								<p>{program?.partnership?.string}</p>
							</div>
						)}
						<div className={stls.sale}>
							<p className={stls.sale__title}>
								{/* //TODO discount & until date */}
								Участвует в&nbsp;распродаже <span className='red'>
									-45%
								</span> до <Until />
							</p>
							<Tag className={stls.sale__tag} variant='gamma'>
								Осталось мест: <PlacesLeft uniqueKey={program?.id} />
							</Tag>
						</div>
					</div>
					<div className={stls.main}>
						<h1 className={stls.title}>{program?.title}</h1>
						<p className={stls.description}>{program?.description}</p>
						<div className={stls.main__btnWrapper}>
							<BtnBeta variant='alpha'>Оставить заявку</BtnBeta>
							<BtnBeta variant='gamma'>Задать вопрос</BtnBeta>
						</div>
					</div>
					<div className={stls.rating}>
						<div className={stls.rating__wrapper}>
							<IconHeart />
							<span className={stls.rating__counter}>4,5</span>
						</div>
						<p className={stls.rating__desc}>
							на отзовике IRecommended и TutorTop
						</p>
					</div>
					<div className={stls.students}>
						<div className={stls.students__wrapper}>
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
				{program?.heroAdvantages && (
					<ul className={stls.bottomList}>
						<li className={stls.bottomItem}>
							{`Актуальная программа: последнее обновление — ${stringDate}`}
						</li>
						{advantagesArray?.map((item, idx) => (
							<li className={stls.bottomItem} key={idx}>
								{item}
							</li>
						))}
					</ul>
				)}
			</Wrapper>
		</section>
	)
}
