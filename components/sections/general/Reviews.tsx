import stls from '@/styles/components/sections/Reviews.module.sass'
import Image from 'next/legacy/image'
import Popup from 'reactjs-popup'
import PopupReview from '@/components/popups/PopupReview'
import { Wrapper } from '@/components/layout'
import VideoReviews from './VideoReviews'
import useAt from '@/hooks/useAt'
import cn from 'classnames'

const Reviews = () => {
	const at = useAt()
	const singleProgramPage = at.programChunk

	const reviews = [
		{
			id: 'reviewModal-1',
			name: 'Мария Алтухова',
			body: 'Закончила программу МВА в прошлом году! Это было отличное время, с ребятами из группы дружим до сих пор. Бываю на мероприятиях в школе несколько раз в год, общаюсь с преподавателями. В целом, программа хорошо сбалансирована и, скорее, подойдет для тех, у кого уже есть базовое образование. Школа дала актуальные знания, которые получилось применить в наших проектах и получить результат',
			excerpt:
				'Закончила программу МВА в прошлом году! Это было отличное время, с ребятами из группы дружим до сих пор. Бываю...',
			profession: 'Руководитель E-COM проекта',
			picUrl: 'review-1.jpg'
		},
		{
			id: 'reviewModal-2',
			name: 'Арсений Бондаренко',
			body: 'Являюсь руководителем строительной фирмы, занимаемся возведением домов из клееного бруса. Программа MBA помогла оптимизировать бизнес-процессы, полностью пересмотреть штат сотрудников и систему KPI. Получилось увеличить ключевые показатели в 1,5 раза. Однозначно рекомендую поступать, если хотите получить современные бизнес-инструменты и навыки',
			excerpt:
				'Являюсь руководителем строительной фирмы, занимаемся возведением домов из клееного бруса. Программа MBA помогла оптимизировать...',
			profession: 'Генеральный директор «ДОМстрой»',
			picUrl: 'review-2.jpg'
		},
		{
			id: 'reviewModal-3',
			name: 'Вячеслав Глухов',
			body: 'Закончил обучение в 2018 году и тесно поддерживаю связь с академией. Для меня программа МВА стала ракетой в плане карьеры и дохода. Отдельно хочу сказать про преподавателей. Большое им спасибо. На вопросы отвечают быстро, всегда готовы поделиться опытом. Учиться сложно, но оно того стоит! В общем, очень доволен',
			excerpt:
				'Закончил обучение в 2018 году и тесно поддерживаю связь с академией. Для меня программа МВА стала ракетой в плане карьеры и дохода...',
			profession: 'Директор по развитию fintech стартапа',
			picUrl: 'review-4.jpg'
		},
		{
			id: 'reviewModal-4',
			name: 'Евгений Борохов',
			body: 'В конце прошлого года возникла потребность в расширении кругозора и получении дополнительных знаний, которые помогли бы более широко взглянуть на деятельность компании. Решение принял за неделю. Выбор бизнес-школ достаточно большой, однако, прислушавшись к рекомендациям, поступил сюда. После получения диплома и завершения обучения многие знакомые интересовались получил ли я то, чего хотел. По сути вопроса, ответ на него, как и полученный результат, для меня оказались по-хорошему неожиданными и «настоящими». В этом большая заслуга людей, которые организовывали, обучали и направляли. Мне повезло пообщаться, посмотреть и поучиться у глубоких, содержательных людей. За это хотелось выразить огромную благодарность Moscow Business Academy и всем моим коллегам, с которыми мне посчастливилось пройти обучение!',
			excerpt:
				'В конце прошлого года возникла потребность в расширении кругозора и получении дополнительных знаний, которые помогли бы более широко...',
			profession: 'Основатель сети детских школ тенниса',
			picUrl: 'review-3.jpg'
		}
	]
	return (
		<>
			<div
				className={cn(stls.reviewsContainer, {
					[stls.singleProgramPage]: singleProgramPage
				})}>
				<VideoReviews singleProgramPage={singleProgramPage} />
				<section className={stls.container}>
					<div className={stls.titleContainer}>
						<h2>{singleProgramPage && 'Отзывы'}</h2>
					</div>
					<Wrapper classNames={[stls.wrapper]}>
						<div className={stls.list}>
							{reviews.map((review, idx) => {
								return (
									<div className={stls.item} key={review.id}>
										<div className={stls.avatar}>
											<Image
												src={`/assets/images/reviews/${review.picUrl}`}
												alt={review.name}
												width={187}
												height={187}
											/>
										</div>
										<div>
											<div className={stls.excerptContainer}>
												<p className={stls.excerpt}>
													{review.excerpt + ' '}
													<Popup
														trigger={<a className={stls.link}>Читать</a>}
														modal
														lockScroll
														nested
														closeOnDocumentClick>
														{/* @ts-expect-error  */}
														{close => (
															<PopupReview
																closePopUp={close}
																review={reviews[idx]}
															/>
														)}
													</Popup>
												</p>
											</div>
											<div className={stls.name}>{review.name}</div>
											<div className={stls.job}>{review.profession}</div>
										</div>
									</div>
								)
							})}
						</div>
					</Wrapper>
				</section>
			</div>
		</>
	)
}

export default Reviews
