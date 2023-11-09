import stls from './Teachers.module.sass'
import cn from 'classnames'
import { TeachersProps } from './types'

import { TypeLibTeachers } from '@/types/index'
import { useState, useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Popup from 'reactjs-popup'
import { routesFront, base64pixel, contactData } from '@/config/index'
import { clickedGetFullTeachersList } from '@/helpers/index'
import { useAt, useDefaultTeachers } from '@/hooks/index'
import { ContextStaticProps } from '@/context/index'
import { Wrapper } from '@/components/layout'
import { PopupForm, PopupTeacher } from '@/components/popups'
import { IconClose, IconSearch } from '@/components/icons'
import { LiTeacherContent } from './components/LiTeacherContent/LiTeacherContent'
import { TeachersHeroSection } from './components/TeachersHeroSection/TeachersHeroSection'

const TeachersLegacy = ({
	programTitle = null,
	programId = null,
	atStandAlonePage = false,
	teachers = null
}: TeachersProps) => {
	const at = useAt()
	const router = useRouter()
	const contactInfo = contactData()
	const defaultTeachers = useDefaultTeachers()

	const { programs, program } = useContext(ContextStaticProps)

	const [searchTerm, setSearchTerm] = useState<string | null>(null)
	const [searchInputIsFocused, setSearchInputIsFocused] = useState(null)
	const [searchTermIsAppliedtoUrl, setSearchTermIsAppliedtoUrl] =
		useState(false)

	const [isInputClose, setIsInputClose] = useState(false)

	const [shownTeachersCount, setShownTeachersCount] = useState(8)
	console.log('shownTeachersCount: ', shownTeachersCount)
	const showMoreTeachersAddendum = 12

	const UITeachers: TypeLibTeachers =
		teachers
			?.filter(teacher =>
				searchTerm
					? teacher?.programs?.some(program => program.includes(searchTerm))
					: teacher
			)
			.filter(
				(teacher, idx) =>
					teacher &&
					(at.programChunk || searchTerm ? teacher : idx < shownTeachersCount)
			) ||
		defaultTeachers?.filter(
			(teacher, idx) =>
				teacher && (at.programChunk ? teacher : idx < shownTeachersCount)
		)

	// * quick fix for the SEO robots to see the full list of teachers
	const hiddenTeachers: TypeLibTeachers | null = teachers?.filter(
		(teacher, idx) => teacher && idx >= shownTeachersCount
	)

	const handleSearch = e => {
		setSearchTermIsAppliedtoUrl(false)
		setSearchTerm(e.target.value)
	}

	const applySearchTermToUrl = (title: string | null = '') => {
		setSearchTerm(title)
		setSearchTermIsAppliedtoUrl(!!title)
		router.replace({ query: { q: encodeURIComponent(title) } }, undefined, {
			shallow: true,
			scroll: false
		})
	}

	const setEmptyInput = () => {
		setSearchTerm('')
		setSearchTermIsAppliedtoUrl(false)
		setIsInputClose(true)
		router.replace({ query: { q: '' } }, undefined, {
			shallow: true,
			scroll: false
		})
	}

	useEffect(() => {
		if (!isInputClose && !searchTerm && router.query.q) {
			setSearchTerm(decodeURIComponent(router.query.q?.toString()))
			setSearchTermIsAppliedtoUrl(true)
		}
		const shownTeachersCountSS = sessionStorage.getItem('shownTeachersCount')

		if (shownTeachersCountSS && +shownTeachersCountSS > shownTeachersCount) {
			setShownTeachersCount(+shownTeachersCountSS)
		}

		sessionStorage.setItem('shownTeachersCount', shownTeachersCount.toString())
	}, [isInputClose, router, searchTerm, shownTeachersCount])

	{
		/* TODO: Test, TemporarySolution: Текстовый шаблон страницы курсов MINI MBA */
	}

	return (
		<>
			<section
				className={cn({
					[stls.container]: true,
					[stls.standalonePage]: atStandAlonePage
				})}
			>
				<Wrapper column>
					<TeachersHeroSection />
					{at.teachers && !at.en && (
						<>
							<h3 className={stls.h3}>
								{at.en ? (
									<>
										Find experts <br /> of your favorite program
									</>
								) : (
									<>
										Найдите экспертов <br /> интересующей Вас программы
									</>
								)}
							</h3>
							{at.teachers && !at.en && (
								<div
									className={stls.searchGroup}
									style={
										searchTerm && searchTerm.length > 50
											? {
													maxWidth: 'max-content'
											  }
											: {}
									}
								>
									<div className={stls.searchInputGroup}>
										<div
											className={cn(stls.searchIcon, {
												[stls.searchIconSearthTermIsApplied]:
													searchTermIsAppliedtoUrl
											})}
										>
											{searchTerm ? (
												<IconClose
													style={{ cursor: 'pointer' }}
													onClick={setEmptyInput}
												/>
											) : (
												<IconSearch style={{ cursor: 'text' }} />
											)}
										</div>
										<input
											type='text'
											placeholder={at.en ? '' : 'Введите название программы...'}
											className={cn(stls.search, {
												[stls.searchTermIsAppliedtoUrl]:
													searchTermIsAppliedtoUrl
											})}
											onChange={handleSearch}
											onFocus={() => {
												setSearchInputIsFocused(true)
												setSearchTermIsAppliedtoUrl(false)
												if (router.query.q) {
													router.replace(
														{ query: { q: undefined } },
														undefined,
														{
															shallow: true,
															scroll: false
														}
													)
												}
											}}
											onBlur={e =>
												!e.relatedTarget?.classList?.contains(
													'Teachers_search_result'
												) && setSearchInputIsFocused(false)
											}
											value={searchTerm || ''}
											size={
												searchTerm && searchTerm.length > 50
													? searchTerm.length
													: undefined
											}
										/>
									</div>
									{searchTerm && searchInputIsFocused && (
										<ul className={stls.searchResults}>
											{programs
												?.filter(program => program.studyFormat === 'online')
												?.filter(program =>
													program?.title
														?.toLowerCase()
														.includes(searchTerm.toLowerCase())
												)
												.filter((_, idx) => idx < 10)
												.map((program, idx) => (
													<li
														key={`Teachers_searchResults_${program?.title}-${idx}`}
														className={stls.searchResult}
													>
														<a
															href='#!'
															className={cn(
																'Teachers_search_result',
																stls.searchResultLink
															)} // should be unique className and only used here for onBlur handler
															onClick={() => {
																applySearchTermToUrl(program?.title || null)
																setSearchInputIsFocused(false)
															}}
															onBlur={e =>
																!e.relatedTarget?.classList?.contains(
																	'Teachers_search_result'
																) && setSearchInputIsFocused(false)
															}
														>
															<p className={stls.searchResultTitle}>
																{program?.title}
															</p>
															<div className={stls.searchResultLabel}>
																{program?.category?.type === 'mini'
																	? 'Mini MBA'
																	: program?.category?.type === 'mba'
																	? 'MBA'
																	: program?.category?.type === 'profession'
																	? 'Профессия'
																	: 'MBA'}
															</div>
														</a>
													</li>
												))}
										</ul>
									)}
								</div>
							)}
						</>
					)}
					<ul
						className={cn({
							[stls.teachersList]: true,
							[stls.teachersListProfession]: at.profession || at.course,
							[stls.teachersListEmpty]: UITeachers?.length === 0
						})}
					>
						{UITeachers?.length > 0 &&
							UITeachers.map((teacher, idx) => (
								<li
									key={`${teacher?.name || 'LiTeacherContent'}-${idx}`}
									className={stls.teachersListItem}
								>
									{atStandAlonePage || at.about ? (
										<Link
											legacyBehavior
											href={`${routesFront.teachers}/${
												teacher?.slug || 'teacher'
											}`}
										>
											<a className={stls.a}>
												<LiTeacherContent
													teacher={teacher}
													atStandAlonePage={atStandAlonePage}
												/>
											</a>
										</Link>
									) : (
										<Popup
											trigger={
												<a href='#!' className={stls.a}>
													<LiTeacherContent
														teacher={teacher}
														atStandAlonePage={atStandAlonePage}
													/>
												</a>
											}
											modal
											lockScroll
											nested
											closeOnDocumentClick
										>
											{/* @ts-expect-error  */}

											{close => (
												<PopupTeacher close={close} teacher={teacher} />
											)}
										</Popup>
									)}
								</li>
							))}
						{hiddenTeachers?.length > 0 &&
							hiddenTeachers.map((teacher, idx) => (
								<li
									key={`${teacher?.name || 'LiTeacherContent'}-${idx}`}
									className={stls.teachersListItem}
									style={{
										display: 'none'
									}}
								>
									<Link
										legacyBehavior
										href={`${routesFront.teachers}/${
											teacher?.slug || 'teacher'
										}`}
									>
										<a className={stls.a}>
											<LiTeacherContent
												teacher={teacher}
												atStandAlonePage={atStandAlonePage}
											/>
										</a>
									</Link>
								</li>
							))}
					</ul>
					{UITeachers?.length === 0 && searchTerm && (
						<div className={stls.nothingFound}>
							<h3 className={stls.nothingFoundTitle}>Ничего не найдено</h3>
							<p className={stls.nothingFoundP}>
								Возможно, вы неправильно ввели запрос, свяжитесь со
								специалистами приемной комиссии по&nbsp;номеру{' '}
								<a
									className={stls.nothingFoundLink}
									href={contactInfo.ru.tels[0].href}
								>
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
								})}
							>
								<Popup
									trigger={
										<button
											className={cn({
												button: true
											})}
										>
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
									}}
								>
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
										<button
											className='button'
											onClick={() =>
												setShownTeachersCount(
													shownTeachersCount + showMoreTeachersAddendum
												)
											}
										>
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
									}}
								>
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
									<a className={cn('button', stls.btnShowMore)}>
										Посмотреть всех
									</a>
								</Link>
							) : (
								UITeachers.length >= 8 &&
								!searchTerm && (
									<button
										className={cn('button', stls.btnShowMore, {
											[stls.atTeachers]: at.teachers
										})}
										onClick={() =>
											setShownTeachersCount(
												shownTeachersCount + showMoreTeachersAddendum
											)
										}
									>
										{at.en
											? 'Show more'
											: `Ещё ${
													shownTeachersCount + showMoreTeachersAddendum >
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
														: showMoreTeachersAddendum
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
				</Wrapper>
			</section>
		</>
	)
}

export default TeachersLegacy
