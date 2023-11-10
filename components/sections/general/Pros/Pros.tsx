import stls from './Pros.module.sass'
import cn from 'classnames'
import { ProsProps } from './types'

import { useAt } from '@/hooks/index'
import Image from 'next/image'
import { IconCheck } from '@/components/icons'
import { Wrapper } from '@/components/layout'

const Pros = ({ program, className, format = 'online' }: ProsProps) => {
	const at = useAt()

	const photo = program?.prosPhoto
		? program?.prosPhoto
		: '/assets/images/advantages_pic_1.jpg'
	{
		/* TODO: Test, TemporarySolution: Текстовый шаблон страницы курсов MINI MBA */
	}
	if (format === 'online') {
		return (
			<section className={cn(className, stls.container)}>
				<Wrapper classNames={[stls.wrapper]}>
					<div className={stls.title}>
						{!at.profession && !at.course && (
							<>
								online
								<br /> модули
							</>
						)}
						{at.profession && !at.course && (
							<>
								online <br /> обучение
							</>
						)}
					</div>
					<h2 className={stls.prosTitle}>
						На{' '}
						{at.mini
							? 'MBA mini'
							: at.mba
							? 'MBA'
							: at.executive
							? 'MBA executive'
							: 'курсе'}{' '}
						мы обучаем онлайн. И делаем это качественно
					</h2>
					<div className={stls.content}>
						<ul className={stls.list}>
							<li className={stls.item}>
								<div className={stls.circle}>
									<IconCheck stroke={'#FF3535'} />
								</div>
								<div>
									<h3 className={stls.itemTitle}>
										Учитесь из любой точки мира
									</h3>
									<p>
										Обучение проходит на нашей образовательной платформе. Всё
										собрано в личном кабинете: здесь удобно смотреть расписание,
										изучать материалы, записи прошедших лекций, загружать
										задания и получать по ним обратную связь
									</p>
								</div>
							</li>
							<li className={stls.item}>
								<div className={stls.circle}>
									<IconCheck stroke={'#FF3535'} />
								</div>
								<div>
									<h3 className={stls.itemTitle}>
										Онлайн-формат даёт возможность учиться у лучших
									</h3>
									{/* TODO: Test, TemporarySolution: Текстовый шаблон страницы курсов MINI MBA */}
									{at.mini ? (
										<p>
											Благодаря онлайн-формату Вы будете учиться у ведущих
											специалистов сразу из нескольких топовых бизнес-школ мира.
											Мы хотим, чтобы ценные знания были доступны Вам при любых
											обстоятельствах
										</p>
									) : (
										<p>
											Благодаря онлайн-формату Вы можете пройти программу с
											экспертами сразу из нескольких топовых бизнес-школ{' '}
											{at.profession || at.course ? 'России' : 'мира'}. Мы
											хотим, чтобы ценные знания были доступны Вам при любых
											обстоятельствах
										</p>
									)}
								</div>
							</li>
							<li className={stls.item}>
								<div className={stls.circle}>
									<IconCheck stroke={'#FF3535'} />
								</div>
								<div>
									{/* TODO: Test, TemporarySolution: Текстовый шаблон страницы курсов MINI MBA */}
									<h3 className={stls.itemTitle}>
										{at.mini
											? 'Получаете престижные документы о прохождении подготовки'
											: 'Получаете престижные дипломы'}
									</h3>
									{at.mini ? (
										<p>
											Дипломы MBA mini online не отличаются от тех, которые
											получают студенты очных программ. Вы будете проходить те
											же учебные дисциплины с теми же спикерами, получите все
											необходимые знания и навыки в более интенсивном темпе
										</p>
									) : (
										<p>
											{at.mba
												? 'Дипломы MBA online'
												: at.executive
												? 'Дипломы MBA executive online'
												: 'Дипломы дистанционных программ'}{' '}
											не отличаются от дипломов очных программ за счет того, что
											преподают те же спикеры по тем же учебным программам
										</p>
									)}
								</div>
							</li>
							<li className={stls.item}>
								<div className={stls.circle}>
									<IconCheck stroke={'#FF3535'} />
								</div>
								<div>
									{/* TODO: Test, TemporarySolution: Текстовый шаблон страницы курсов MINI MBA */}
									{at.mini ? (
										<>
											<h3 className={stls.itemTitle}>
												Общайтесь с преподавателями online
											</h3>
											<p>
												На MBA mini online у Вас есть возможность задавать
												вопросы преподавателям во время видео-встреч, а также
												через нашу образовательную платформу
											</p>
										</>
									) : (
										<>
											<h3 className={stls.itemTitle}>
												Общайтесь с{' '}
												{at.profession || at.course
													? 'преподавателями'
													: 'экспертами'}{' '}
												online
											</h3>
											<p>
												На{' '}
												{at.profession || at.course
													? 'курсе'
													: 'MBA mini online'}{' '}
												у Вас есть возможность задавать вопросы
												{at.profession || at.course
													? ' преподавателям'
													: ' экспертам'}{' '}
												во время видео-встреч, а также через нашу
												образовательную платформу
											</p>
										</>
									)}
								</div>
							</li>
						</ul>
						<div className={stls.imageRight}>
							<Image
								src={photo}
								alt='Студент MBA'
								width={357}
								height={558}
								style={{ objectFit: 'cover' }}
							/>
						</div>
					</div>
				</Wrapper>
			</section>
		)
	}

	if (format === 'blended') {
		return (
			<section className={cn(stls.container, stls.blendedContainer)}>
				<Wrapper classNames={[stls.wrapper]}>
					<div className={stls.title}>
						online <br /> модули
					</div>
					<h2 className={stls.prosTitle}>
						Также на MBA blended мы обучаем онлайн. И делаем это качественно
					</h2>
					<div className={stls.content}>
						<div className={stls.imageLeft}>
							<div className={stls.imageContainer}>
								<Image
									src={photo}
									alt='Студент MBA'
									width={265}
									height={317}
									style={{ objectFit: 'cover' }}
								/>
							</div>
						</div>
						<ul className={stls.list}>
							<li className={stls.item}>
								<div className={stls.circle}>
									<IconCheck stroke={'#FF3535'} />
								</div>
								<div>
									<h3 className={stls.itemTitle}>
										Учитесь из любой точки мира
									</h3>
									<p>
										Обучение проходит на нашей образовательной платформе. Всё
										собрано в личном кабинете: здесь удобно смотреть расписание,
										изучать материалы, записи прошедших лекций, загружать
										задания и получать по ним обратную связь
									</p>
								</div>
							</li>
							<li className={stls.item}>
								<div className={stls.circle}>
									<IconCheck stroke={'#FF3535'} />
								</div>
								<div>
									<h3 className={stls.itemTitle}>
										Онлайн-формат даёт возможность учиться у лучших
									</h3>
									<p>
										Благодаря онлайн-формату Вы можете пройти программу с
										экспертами сразу из нескольких топовых бизнес-школ мира. Мы
										хотим, чтобы ценные знания были доступны Вам при любых
										обстоятельствах
									</p>
								</div>
							</li>
							<li className={stls.item}>
								<div className={stls.circle}>
									<IconCheck stroke={'#FF3535'} />
								</div>
								<div>
									<h3 className={stls.itemTitle}>
										Общайтесь с экспертами online
									</h3>
									<p>
										На MBA{' '}
										{at.mini
											? 'mini'
											: at.mba
											? 'mba'
											: at.executive
											? 'executive'
											: null}{' '}
										online у Вас есть возможность задавать вопросы экспертам во
										время видео-встреч, а также через нашу образовательную
										платформу
									</p>
								</div>
							</li>
						</ul>
					</div>
				</Wrapper>
			</section>
		)
	}
}

export default Pros