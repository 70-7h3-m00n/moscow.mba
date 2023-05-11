import stls from '@/styles/components/sections/Executive.module.sass'
import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
import { base64pixel } from '@/config/index'
import { useAt } from '@/hooks/index'
import { Wrapper } from '@/components/layout'
import { ProgramSubjects } from '@/components/general'
import { Price, TrainingPeriod } from '@/components/costs'

const Executive = () => {
	const at = useAt()

	return (
		<section className={stls.container}>
			<Wrapper classNames={[stls.wrapper]}>
				<div className={stls.flexContainer}>
					<div className={stls.content}>
						<div className={stls.title}>
							<span>Premium</span>
						</div>
						<h2>Executive MBA</h2>
						<p className={stls.desc}>
							{at.en
								? 'Executive MBA was developed for persistent entrepreneurs and top managers of the large enterprises, who got accustomed to being the best and are not ready to quit now'
								: 'Программа Executive MBA разработана для амбициозных предпринимателей и топ-менеджеров крупных компаний, которые привыкли быть лучшими и не готовы останавливаться на достигнутом'}
						</p>
						<p className={stls.desc}>
							{at.en
								? 'This course combines the best homeland business models with the global experience. It will provide you with knowledge needed to achieve a breakthrough in company management. You will make a new step-by-step development strategy which will help you to get a fresh look on your business'
								: 'Курс, объединивший лучшие отечественные бизнес-практики с глобальным мировым опытом, поможет Вам совершить настоящий прорыв в управлении компанией. Вы построите пошаговую стратегию развития, которая позволит взглянуть на бизнес по-новому'}
						</p>
						<ul className={stls.list}>
							<li className={stls.listItem}>
								<TrainingPeriod type={'executive'} />
							</li>
							<li className={stls.listItem}>
								2 {at.en ? 'field courses' : 'выездных модуля'}
							</li>
							<li className={stls.listItem}>
								<ProgramSubjects sum={true} type={'executive'} />{' '}
								{at.en ? 'subjects' : 'дисциплин'}
							</li>
						</ul>
						<div className={stls.price}>
							{at.en ? 'Cost' : 'Стоимость'}:{' '}
							<Price discount={false} type={'executive'} />
						</div>
						<Link
							legacyBehavior
							href='/programs/executive/'
							{...(at.en ? { locale: 'ru' } : undefined)}>
							<a className={stls.button}>
								{at.en ? 'Learn more' : 'Узнать подробнее'}
							</a>
						</Link>
					</div>
					<div className={stls.imagesContainer}>
						<div className={cn(stls.image, stls.imageOne)}>
							<Image
								src={'/assets/images/executive_pic_1.jpg'}
								alt={
									at.en
										? 'Expert is giving talk during conference'
										: 'На конференции спикер со сцены даёт речь для слушателей'
								}
								width={401}
								height={400}
								placeholder='blur'
								blurDataURL={base64pixel}
							/>
						</div>
						<div className={cn(stls.image, stls.imageTwo)}>
							<Image
								src={'/assets/images/executive_pic_2.jpg'}
								alt={
									at.en
										? 'Expert is giving talk during conference'
										: 'На конференции спикер со сцены даёт речь'
								}
								width={221}
								height={221}
								placeholder='blur'
								blurDataURL={base64pixel}
							/>
						</div>
						<div className={stls.count}>
							<strong>200+</strong>
							<span>{at.en ? 'graduates' : 'Студентов уже обучились'}</span>
						</div>
					</div>
				</div>
			</Wrapper>
		</section>
	)
}

export default Executive
