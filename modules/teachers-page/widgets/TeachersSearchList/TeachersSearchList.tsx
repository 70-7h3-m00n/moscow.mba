import stls from '../../TeachersPage.module.sass'
import cn from 'classnames'

import Popup from 'reactjs-popup'
import { PopupForm } from '@/components/popups'
import useAt from '@/hooks/useAt'
import routesFront from '@/config/routesFront'
import { useTeachersSearch } from 'modules/teachers-page/fractals/context/context'
import { clickedGetFullTeachersList } from '@/helpers/index'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { ContextStaticProps } from '@/context/index'
import Link from 'next/link'
import { contactData } from '@/config/index'
import { ACTION } from 'modules/teachers-page/fractals/context/reducer'

export function TeachersSearchList({ programId, programTitle }) {
	const at = useAt()
	const router = useRouter()
	const contactInfo = contactData()
	const { program } = useContext(ContextStaticProps)
	const { state, dispatch } = useTeachersSearch()

	const {
		searchTerm,
		shownTeachersCount,
		UITeachers,
		teachers,
		showMoreTeachersAddedNum
	} = state


	const handleOnClick = () =>
		dispatch({
			type: ACTION.SET_SHOWN_TEACHERS_COUNT,
			payload: shownTeachersCount + showMoreTeachersAddedNum
		})


	return (
		<>
			{UITeachers?.length === 0 && searchTerm && (
				<div className={stls.nothingFound}>
					<h3 className={stls.nothingFoundTitle}>Ничего не найдено</h3>
					<p className={stls.nothingFoundP}>
						Возможно, вы неправильно ввели запрос, свяжитесь со специалистами
						приемной комиссии по&nbsp;номеру{' '}
						<a
							className={stls.nothingFoundLink}
							href={contactInfo.ru.tels[0].href}>
							{contactInfo.ru.tels[0].val}
						</a>
						, они вам помогут!
					</p>
				</div>
			)}
			{UITeachers?.length === 0 && !searchTerm && (
				<div className={stls.getAllTeachers}>
					<h3 className={stls.getAllTeachersTitle}>
						Получите полный список преподавателей
					</h3>
					<div
						className={cn({
							[stls.btn]: true,
							[stls.getAllTeachersBtn]: true
						})}>
						<Popup
							trigger={
								<button
									className={cn({
										button: true
									})}>
									{at.en ? "Get full teacher's list" : 'Запросить список'}
								</button>
							}
							modal
							lockScroll
							nested
							closeOnDocumentClick
							onOpen={() => {
								clickedGetFullTeachersList({
									url: `${routesFront.root}${router.asPath}`
								})
							}}>
							{/* @ts-expect-error  */}

							{close => (
								<PopupForm
									programId={programId}
									programTitle={programTitle}
									closePopUpForm={close}
									title={
										at.en
											? "Get teacher's list"
											: 'Получить полный список преподавателей'
									}
									disc={
										at.en
											? 'Submit a request and receive a consultation on experts, programs, discounts, and requirements'
											: 'Оставьте заявку и получите консультацию по преподавателям, программам MBA, а также узнайте возможные варианты скидок и требования к поступлению'
									}
									formName={`Заявка с модальной формы "Получите полный список преподавателей"${
										programTitle || program?.title
											? ` программы ${program?.category?.type || ''} ${
													program?.studyFormat || ''
											  } ${programTitle || program.title}`
											: ''
									}`}
								/>
							)}
						</Popup>
					</div>
				</div>
			)}
			{UITeachers?.length > 0 && (
				<div className={stls.btn}>
					{shownTeachersCount >= teachers?.length ? (
						<Popup
							trigger={
								<button className='button' onClick={handleOnClick}>
									{at.en ? 'Request full list' : 'Запросить полный список'}
								</button>
							}
							modal
							lockScroll
							nested
							closeOnDocumentClick
							onOpen={() => {
								clickedGetFullTeachersList({
									url: `${routesFront.root}${router.asPath}`
								})
							}}>
							{/* @ts-expect-error  */}
							{close => (
								<PopupForm
									programId={programId}
									programTitle={programTitle}
									closePopUpForm={close}
									title={
										at.en
											? 'Get to know the experts'
											: 'Узнайте своих экспертов'
									}
									disc={
										at.en
											? 'Submit a request and receive a consultation on experts, programs, discounts, and requirements'
											: 'Оставьте заявку и получите консультацию по преподавателям, программам MBA, а также узнайте возможные варианты скидок и требования к поступлению'
									}
									formName={`Заявка с модальной формы "Запросить полный список преподавателей"${
										programTitle || program?.title
											? ` программы ${program?.category?.type || ''} ${
													program?.studyFormat || ''
											  } ${programTitle || program.title}`
											: ''
									}`}
								/>
							)}
						</Popup>
					) : at.about ? (
						<Link legacyBehavior href={routesFront.teachers}>
							<a className={cn('button', stls.btnShowMore)}>Посмотреть всех</a>
						</Link>
					) : (
						UITeachers.length >= 8 &&

						!searchTerm &&
						teachers && (

							<button
								className={cn('button', stls.btnShowMore, {
									[stls.atTeachers]: at.teachers
								})}
								onClick={handleOnClick}>
								{at.en
									? 'Show more'
									: `Ещё ${
											shownTeachersCount + showMoreTeachersAddedNum >
											(teachers?.length
												? teachers.filter(teacher =>
														searchTerm
															? teacher?.programs?.some(program =>
																	program?.includes(searchTerm)
															  )
															: teacher
												  ).length
												: 0)
												? (teachers?.length
														? teachers.filter(teacher =>
																searchTerm
																	? teacher?.programs?.some(program =>
																			program?.includes(searchTerm)
																	  )
																	: teacher
														  ).length
														: 0) - shownTeachersCount
												: showMoreTeachersAddedNum
									  } преподавателей${
											teachers?.length
												? ` из ${
														teachers.filter(teacher =>
															searchTerm
																? teacher?.programs?.some(program =>
																		program?.includes(searchTerm)
																  )
																: teacher
														).length
												  }`
												: undefined
									  }`}
							</button>
						)
					)}
				</div>
			)}
		</>
	)
}
