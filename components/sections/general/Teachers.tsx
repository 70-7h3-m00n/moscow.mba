import stls from '@/styles/components/sections/Teachers.module.sass'
import { TypeLibTeacher, TypeLibTeachers } from '@/types/index'
import { useState, useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/legacy/image'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { routesFront, base64pixel, contactData } from '@/config/index'
import { clickedGetFullTeachersList, getImageHeight } from '@/helpers/index'
import { useAt, useDefaultTeachers } from '@/hooks/index'
import {
	ContextStaticProps,
	DigitalTransformationContext
} from '@/context/index'
import { Wrapper } from '@/components/layout'
import { PopupForm, PopupTeacher } from '@/components/popups'
import {
	IconCheck,
	IconClose,
	IconMoreThan,
	IconSearch
} from '@/components/icons'

const LiTeacherContent = ({
	teacher,
	atStandAlonePage
}: {
	teacher: TypeLibTeacher | null
	atStandAlonePage?: boolean
}) => {
	const at = useAt()

	return (
		<div className={stls.teachersItem}>
			<div className={stls.teachersItemWrapper}>
				<div className={stls.image}>
					{teacher?.portrait?.url && (
						<Image
							src={teacher?.portrait?.url}
							alt={teacher?.name}
							width={teacher?.portrait?.url ? 270 : undefined}
							height={
								teacher?.portrait?.url &&
								getImageHeight({
									width: 270,
									widthInitial: teacher?.portrait?.width,
									heightInitial: teacher?.portrait?.height
								})
							}
							layout='responsive'
							placeholder='blur'
							blurDataURL={base64pixel}
						/>
					)}
				</div>
				<div className={stls.teachersItemContent}>
					<div>
						<div className={stls.name}>
							{at.en ? teacher?.slug?.split('-').join(' ') : teacher?.name}
						</div>
						<p className={stls.description}>{teacher?.description}</p>
					</div>
					<div
						className={cn(stls.bio, stls.phone, {
							[stls.atStandAlonePage]: atStandAlonePage
						})}>
						<p
							className={cn(stls.bioP, {
								[stls.atStandAlonePage]: atStandAlonePage
							})}>
							{at.en ? 'Learn more' : 'Подробнее'}
						</p>
						<IconMoreThan classNames={[stls.icon]} />
					</div>
				</div>
			</div>
			<div
				className={cn(stls.bio, stls.tabletLaptopDesktopWidescreen, {
					[stls.atStandAlonePage]: atStandAlonePage
				})}>
				<p
					className={cn(stls.bioP, {
						[stls.atStandAlonePage]: atStandAlonePage
					})}>
					{/* {at.en ? 'Learn more' : 'Подробнее'} */}
					<svg
						width='92'
						height='16'
						viewBox='0 0 92 16'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M0.84 12V0.639999H10.44V12H9.384V1.616H1.896V12H0.84ZM17.2733 4.096C18.4146 4.096 19.3639 4.49067 20.1213 5.28C20.8893 6.05867 21.2733 7.01333 21.2733 8.144C21.2733 9.28533 20.8893 10.2453 20.1213 11.024C19.3533 11.8027 18.4039 12.192 17.2733 12.192C16.1426 12.192 15.1933 11.7973 14.4253 11.008C13.6573 10.2187 13.2733 9.264 13.2733 8.144C13.2733 7.01333 13.6573 6.05867 14.4253 5.28C15.2039 4.49067 16.1533 4.096 17.2733 4.096ZM17.2733 11.248C18.1479 11.248 18.8626 10.9493 19.4173 10.352C19.9719 9.75467 20.2493 9.01867 20.2493 8.144C20.2493 7.25867 19.9666 6.51733 19.4013 5.92C18.8466 5.32267 18.1373 5.024 17.2733 5.024C16.4093 5.024 15.6999 5.328 15.1453 5.936C14.5906 6.544 14.3133 7.28 14.3133 8.144C14.3133 9.01867 14.5906 9.75467 15.1453 10.352C15.7106 10.9493 16.4199 11.248 17.2733 11.248ZM29.3075 11.088V5.2H25.4675L25.1795 7.808C25.0942 8.544 24.9875 9.21067 24.8595 9.808C24.7315 10.3627 24.5715 10.7893 24.3795 11.088H29.3075ZM23.3875 14.384H22.4755V11.088H23.3715C23.7875 10.5867 24.0862 9.46667 24.2675 7.728L24.6515 4.288H30.3155V11.088H31.7395V14.384H30.8275V12H23.3875V14.384ZM34.7635 10.384V15.584H33.7715V4.288H34.7635V5.936C34.9982 5.37067 35.4088 4.92267 35.9955 4.592C36.5822 4.26133 37.1955 4.096 37.8355 4.096C38.9875 4.096 39.9155 4.48533 40.6195 5.264C41.3235 6.04267 41.6755 7.00267 41.6755 8.144C41.6755 9.296 41.3128 10.2613 40.5875 11.04C39.8728 11.808 38.9555 12.192 37.8355 12.192C36.9502 12.192 36.2248 11.9467 35.6595 11.456C35.2328 11.136 34.9342 10.7787 34.7635 10.384ZM34.7475 8.144C34.7475 9.01867 35.0248 9.75467 35.5795 10.352C36.1342 10.9387 36.8382 11.232 37.6915 11.232C38.5662 11.232 39.2755 10.9333 39.8195 10.336C40.3742 9.73867 40.6515 9.008 40.6515 8.144C40.6515 7.25867 40.3742 6.52267 39.8195 5.936C39.2648 5.33867 38.5555 5.04 37.6915 5.04C36.8275 5.04 36.1182 5.344 35.5635 5.952C35.0195 6.54933 34.7475 7.28 34.7475 8.144ZM47.6795 4.096C48.8208 4.096 49.7702 4.49067 50.5275 5.28C51.2955 6.05867 51.6795 7.01333 51.6795 8.144C51.6795 9.28533 51.2955 10.2453 50.5275 11.024C49.7595 11.8027 48.8102 12.192 47.6795 12.192C46.5488 12.192 45.5995 11.7973 44.8315 11.008C44.0635 10.2187 43.6795 9.264 43.6795 8.144C43.6795 7.01333 44.0635 6.05867 44.8315 5.28C45.6102 4.49067 46.5595 4.096 47.6795 4.096ZM47.6795 11.248C48.5542 11.248 49.2688 10.9493 49.8235 10.352C50.3782 9.75467 50.6555 9.01867 50.6555 8.144C50.6555 7.25867 50.3728 6.51733 49.8075 5.92C49.2528 5.32267 48.5435 5.024 47.6795 5.024C46.8155 5.024 46.1062 5.328 45.5515 5.936C44.9968 6.544 44.7195 7.28 44.7195 8.144C44.7195 9.01867 44.9968 9.75467 45.5515 10.352C46.1168 10.9493 46.8262 11.248 47.6795 11.248ZM57.9039 4.256C59.0559 4.256 59.9945 4.63467 60.7199 5.392C61.4452 6.13867 61.8079 7.08267 61.8079 8.224C61.8079 9.376 61.4239 10.3253 60.6559 11.072C59.8985 11.8187 58.9492 12.192 57.8079 12.192C56.5919 12.192 55.6212 11.7973 54.8959 11.008C54.1705 10.208 53.8079 9.20533 53.8079 8C53.8079 7.72267 53.8132 7.52533 53.8239 7.408L53.8399 6.88C53.8399 6.64533 53.8452 6.464 53.8559 6.336C53.8665 6.176 53.8825 5.97333 53.9039 5.728C54.0319 4.16 54.3839 3.01333 54.9599 2.288C55.5465 1.56267 56.5599 1.06667 57.9999 0.799999L61.2159 0.207999V1.152L58.0159 1.744C57.1839 1.91467 56.5385 2.16 56.0799 2.48C55.6319 2.8 55.3119 3.32267 55.1199 4.048C54.9812 4.57067 54.8905 5.184 54.8479 5.888C55.4239 4.8 56.4425 4.256 57.9039 4.256ZM57.8079 11.248C58.6825 11.248 59.3972 10.96 59.9519 10.384C60.5065 9.808 60.7839 9.088 60.7839 8.224C60.7839 7.33867 60.5065 6.61333 59.9519 6.048C59.3972 5.472 58.6825 5.184 57.8079 5.184C56.9332 5.184 56.2185 5.47733 55.6639 6.064C55.1199 6.64 54.8479 7.36 54.8479 8.224C54.8479 9.09867 55.1252 9.824 55.6799 10.4C56.2345 10.9653 56.9439 11.248 57.8079 11.248ZM64.3809 12V4.288H65.3889V7.632H70.3489V4.288H71.3569V12H70.3489V8.544H65.3889V12H64.3809ZM77.8015 4.096C78.9642 4.096 79.8922 4.48 80.5855 5.248C81.2895 6.00533 81.6575 6.96533 81.6895 8.128H74.9535V8.144C74.9535 9.01867 75.2362 9.75467 75.8015 10.352C76.3668 10.9493 77.0815 11.248 77.9455 11.248C78.9802 11.248 79.7855 10.928 80.3615 10.288C80.4895 10.1173 80.5748 10 80.6175 9.936H81.5935C81.3375 10.8107 80.6495 11.472 79.5295 11.92C79.1242 12.1013 78.5962 12.192 77.9455 12.192C76.7935 12.192 75.8335 11.8027 75.0655 11.024C74.3082 10.2453 73.9295 9.28533 73.9295 8.144C73.9295 6.992 74.2922 6.032 75.0175 5.264C75.7535 4.48533 76.6815 4.096 77.8015 4.096ZM77.8015 4.976C77.0868 4.976 76.4788 5.184 75.9775 5.6C75.4868 6.00533 75.1668 6.56 75.0175 7.264H80.5855C80.4362 6.54933 80.1162 5.98933 79.6255 5.584C79.1348 5.17867 78.5268 4.976 77.8015 4.976ZM87.4578 4.096C88.6204 4.096 89.5484 4.48 90.2418 5.248C90.9458 6.00533 91.3138 6.96533 91.3458 8.128H84.6098V8.144C84.6098 9.01867 84.8924 9.75467 85.4578 10.352C86.0231 10.9493 86.7378 11.248 87.6018 11.248C88.6364 11.248 89.4418 10.928 90.0178 10.288C90.1458 10.1173 90.2311 10 90.2738 9.936H91.2498C90.9938 10.8107 90.3058 11.472 89.1858 11.92C88.7804 12.1013 88.2524 12.192 87.6018 12.192C86.4498 12.192 85.4898 11.8027 84.7218 11.024C83.9644 10.2453 83.5858 9.28533 83.5858 8.144C83.5858 6.992 83.9484 6.032 84.6738 5.264C85.4098 4.48533 86.3378 4.096 87.4578 4.096ZM87.4578 4.976C86.7431 4.976 86.1351 5.184 85.6338 5.6C85.1431 6.00533 84.8231 6.56 84.6738 7.264H90.2418C90.0924 6.54933 89.7724 5.98933 89.2818 5.584C88.7911 5.17867 88.1831 4.976 87.4578 4.976Z'
							fill={atStandAlonePage ? '#2d2c2a' : 'white'}
						/>
					</svg>
				</p>
				<IconMoreThan classNames={[stls.icon]} />
			</div>
		</div>
	)
}

const Teachers = ({
	programTitle = null,
	programId = null,
	atStandAlonePage = false,
	teachers = null
}) => {
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
	const showMoreTeachersAddendum = 12
	const UITeachers: TypeLibTeachers | null = teachers
		?.filter(teacher =>
			searchTerm
				? teacher?.programs?.some(program => program.includes(searchTerm))
				: teacher
		)
		.filter(
			(teacher, idx) =>
				teacher &&
				(at.programChunk || searchTerm ? teacher : idx < shownTeachersCount)
		) || [
		defaultTeachers?.filter(
			(teacher, idx) =>
				teacher && (at.programChunk ? teacher : idx < shownTeachersCount)
		)
	]

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
	const isDigitalTransformation = useContext(DigitalTransformationContext)

	return (
		<>
			<section
				className={cn({
					[stls.container]: true,
					[stls.standalonePage]: atStandAlonePage
				})}>
				<Wrapper column>
					<div className={stls.sectionPl}>
						<div className={stls.titlePl}>{at.en ? 'experts' : 'эксперты'}</div>
						<div className={stls.content}>
							<h2
								className={cn({
									[stls.titleProfession]: at.profession || at.course
								})}>
								{at.profession || at.course ? (
									at.en ? (
										''
									) : (
										<>
											Преподаватели курса -{' '}
											{<span className={'red'}>практикующие</span>} эксперты
										</>
									)
								) : at.en ? (
									<>
										Russian and <span className={'red'}>international</span>{' '}
										experts
									</>
								) : (
									<>
										Российские и <span className={'red'}>зарубежные</span>{' '}
										эксперты программы
									</>
								)}
							</h2>
							{/* TODO: Test, TemporarySolution: Текстовый шаблон страницы курсов MINI MBA */}
							{isDigitalTransformation ? (
								<div className={stls.text}>
									{at.en
										? 'Adopt the unique experience of international-level professionals adapted to the Russian market'
										: 'Перенимайте уникальный опыт профессионалов международного уровня, адаптированный под рынок РФ'}
								</div>
							) : (
								!at.profession &&
								!at.course && (
									<div className={stls.text}>
										{at.en
											? 'Learn from the unique foreign experts who adapted their experience for Russian market'
											: 'Перенимайте уникальный опыт международных экспертов, адаптированный под рынок РФ'}
									</div>
								)
							)}
							<div
								className={cn({
									[stls.twoImages]: true,
									[stls.detailImage]: true,
									[stls.detailImageAtProfession]: at.profession || at.course
								})}>
								<div
									className={cn({
										[stls.image]: true,
										[stls.pic1]: true,
										[stls.pic1AtProfession]: at.profession || at.course
									})}>
									<Image
										src={'/assets/images/speaker_1.jpg'}
										alt={
											at.en
												? 'Expert during a talk'
												: 'Спикер на сцене даёт речь'
										}
										width={!at.profession && !at.course ? 425 : 344}
										height={!at.profession && !at.course ? 422 : 342}
										layout='responsive'
										placeholder='blur'
										blurDataURL={base64pixel}
									/>
								</div>
								<div
									className={cn({
										[stls.image]: true,
										[stls.pic2]: true,
										[stls.pic2AtProfession]: at.profession || at.course
									})}>
									<Image
										src={'/assets/images/speaker_2.jpg'}
										alt={
											at.en
												? 'Expert during a talk'
												: 'Спикер на сцене даёт речь'
										}
										width={!at.profession && !at.course ? 236 : 199}
										height={!at.profession && !at.course ? 236 : 199}
										layout='responsive'
										placeholder='blur'
										blurDataURL={base64pixel}
									/>
								</div>
							</div>
							<ul
								className={cn({
									[stls.detailList]: true,
									[stls.detailListProfession]: at.profession || at.course
								})}>
								<li>
									<div className={stls.circle}>
										<IconCheck />
									</div>
									<div>
										<h5>{at.en ? 'Practitioners' : 'Практикующие эксперты'}</h5>
										<p>
											{at.profession || at.course ? (
												at.en ? (
													''
												) : (
													'Имеют опыт работы в крупных российских и зарубежных организациях'
												)
											) : at.en ? (
												'They have implemented major projects on the markets of Europe and USA'
											) : (
												<>
													Реализовывали крупные проекты на рынках
													<br /> Европы и США
												</>
											)}
										</p>
									</div>
								</li>
								<li>
									<div className={stls.circle}>
										<IconCheck />
									</div>
									<div>
										<h5>
											{at.en
												? 'Multi-stage verification'
												: 'Прошли многоэтапную проверку'}
										</h5>
										<p>
											{at.en ? (
												'They have passed Moscow Academy’s multi-stage verification and have teaching accreditation'
											) : (
												<>
													Прошли многоэтапную проверку специалистами академии
													<br />и имеют аккредитацию на преподавание
												</>
											)}
										</p>
									</div>
								</li>
								<li>
									<div className={stls.circle}>
										<IconCheck />
									</div>
									<div>
										<h5>
											{at.profession || at.course
												? at.en
													? 'Rich teaching experience'
													: 'Большой опыт преподавания'
												: at.en
												? 'International teaching experience'
												: 'Международный опыт преподавания'}
										</h5>
										<p>
											{at.profession || at.course
												? at.en
													? ''
													: 'Преподают в ведущих российских учебных заведениях'
												: at.en
												? 'They work in the leading world-class business schools'
												: 'Преподают в ведущих бизнес-школах мира'}
										</p>
									</div>
								</li>
							</ul>
						</div>
						{!at.profession && !at.course && !at.teachers && (
							<h3 className={stls.teachersPros}>
								{!at.profession &&
									!at.course &&
									(at.en ? (
										<>
											More than 150
											<br /> international-level professors
										</>
									) : (
										<>
											Более 150 профессоров <br /> международного уровня
										</>
									))}
							</h3>
						)}
					</div>
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
									}>
									<div className={stls.searchInputGroup}>
										<div
											className={cn(stls.searchIcon, {
												[stls.searchIconSearthTermIsApplied]:
													searchTermIsAppliedtoUrl
											})}>
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
														className={stls.searchResult}>
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
															}>
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
						})}>
						{UITeachers?.length > 0 &&
							UITeachers.map((teacher, idx) => (
								<li
									key={`${teacher?.name || 'LiTeacherContent'}-${idx}`}
									className={stls.teachersListItem}>
									{atStandAlonePage || at.about ? (
										<Link
											legacyBehavior
											href={`${routesFront.teachers}/${
												teacher?.slug || 'teacher'
											}`}>
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
											closeOnDocumentClick>
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
									}}>
									<Link
										legacyBehavior
										href={`${routesFront.teachers}/${
											teacher?.slug || 'teacher'
										}`}>
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
										<button
											className='button'
											onClick={() =>
												setShownTeachersCount(
													shownTeachersCount + showMoreTeachersAddendum
												)
											}>
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
										}>
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

export default Teachers
