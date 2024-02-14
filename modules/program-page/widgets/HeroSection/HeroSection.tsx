import stls from './HeroSection.module.sass'
import cn from 'classnames'
import { HeroSectionProps } from './types'

import { Wrapper } from '@/components/layout'
import { Switch } from '../components/Switch/Switch'
import { Details } from '../components'
import { IconFire, IconHeart } from './widgets'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { Partnership } from './widgets/Partnership/Partnership'
import { Sale } from './widgets/Sale/Sale'
import { advantagesArray } from './constants'
import useAt from '@/hooks/useAt'
import Link from 'next/link'
import { PopupCTA } from '@/components/popups/PopupCTA/PopupCTA'
import { CornerPhoto } from '../components/CornerPhoto/CornerPhoto'

const stringDate = format(new Date(), 'LLLL yyyy', { locale: ru })

export const HeroSection = ({
	className,
	program,
	...rest
}: HeroSectionProps) => {
	const at = useAt()

	const advantages = at.profession
		? advantagesArray.profession
		: at.course
		? advantagesArray.course
		: advantagesArray.mba

	const isPartnership = program?.partnership && program?.partnership?.url

	const cornerPhotoURL = at.profession
		? '/assets/images/program/hero-image-2.png'
		: '/assets/images/program/hero-image-3.png'

	return (
		<section className={cn(className, stls.container)} {...rest}>
			<Wrapper classNames={[stls.content]}>
				<div className={stls.heroWrapper}>
					<div className={stls.tags}>
						<Switch className={stls.switch} />
					</div>
					<div className={stls.detailsMobile}>
						{isPartnership && <Partnership program={program} mobile />}
						<Sale className={stls.sale} program={program} />
					</div>
					<div className={stls.main}>
						<h1 className={stls.title}>{program?.title}</h1>
						<p className={stls.description}>{program?.description}</p>
						<div className={stls.main__btnWrapper}>
							<Link
								href='#study-cost'
								scroll={false}
								className={stls.main__link}
							>
								Оставить заявку
							</Link>
							<PopupCTA
								title='Задать вопрос или получить бесплатную консультацию'
								btnText='Задать вопрос'
								variant='gamma'
								program={program}
							/>
						</div>
					</div>
					<div className={stls.rating}>
						<div className={stls.rating__wrapper}>
							<IconHeart />
							<span className={stls.rating__counter}>4,8</span>
						</div>
						<p className={stls.rating__desc}>
							рейтинг на&nbsp;Otzovik и&nbsp;Tutortop
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
				<CornerPhoto
					className={stls.cornerPhoto}
					src={cornerPhotoURL}
					size='l'
				/>
				{program?.heroAdvantages && (
					<ul className={stls.bottomList}>
						<li className={stls.bottomItem}>
							{`Актуальная программа: последнее обновление — ${stringDate}`}
						</li>
						{advantages?.map((item, idx) => (
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
