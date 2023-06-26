import stls from '@/styles/components/general/Filters.module.sass'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import cn from 'classnames'
import { useAt } from '@/hooks/index'
import { ContextStaticProps } from '@/context/index'
import Discount from '@/components/costs/Discount'
import { SearchField } from '@/components/general'
import FilterDuration from './FilterDuration'

const Filters = ({ mbaTypeOfProgram, mbaFormat }) => {
	const { programs, curStudyField, setCurStudyField } =
		useContext(ContextStaticProps)

	const router = useRouter()

	const [defaultStudyFieldIsSet, setDefaultStudyFieldIsSet] = useState(false)
	// const [searchTermIsAppliedtoUrl, setSearchTermIsAppliedtoUrl] =
	//   useState(false)

	const [isNavigated, setIsNavigated] = useState(false)

	const at = useAt()

	const allPrograms =
		at.programs &&
		!at.course &&
		!at.executive &&
		!at.mba &&
		!at.mbl &&
		!at.mini &&
		!at.profession

	const handleLinkClick = e => {
		if (at.profession || at.course) e.preventDefault()
	}

	const studyFieldsFiltered =
		at.profession || at.course
			? Array.from(
					new Set(
						programs
							.filter(
								program =>
									program?.studyFormat === mbaFormat &&
									program?.category?.type === mbaTypeOfProgram
							)
							.map(program => program?.study_field?.name)
					)
			  ).filter(studyField => studyField)
			: []

	// setCurStudyField(studyFieldsFiltered?.[0] || null)

	// TODO: figure out better types
	const handleSetCurStudyField = (field: any) => {
		if (at.profession || at.course) {
			if (field) {
				router.replace(
					{
						query: {
							curStudyField: encodeURIComponent(field)
						}
					},
					undefined,
					{
						shallow: true,
						scroll: false
					}
				)
			}
			// setCurStudyField(field)
		}
	}
	//
	useEffect(() => {
		if ((at.profession || at.course) && !isNavigated) {
			if (router.query.curStudyField) {
				setCurStudyField(
					decodeURIComponent(router.query.curStudyField.toString())
				)
			}
		} else {
			setCurStudyField(null)
		}
	}, [
		at.profession,
		at.course,
		// setCurStudyField
		// studyFieldsFiltered,
		router,
		curStudyField
	])

	useEffect(() => {
		if (at.profession || at.course) {
			if (!curStudyField && !isNavigated) {
				setCurStudyField(studyFieldsFiltered?.[0] || null)
			}
		} else {
			setCurStudyField(null)
		}
	}, [
		at.profession,
		at.course,
		// setCurStudyField
		// studyFieldsFiltered,
		router,
		curStudyField,
		isNavigated
	])

	// const activeProgress = '#FB4D3E'
	// const inactiveProgress = '#EFEFEF'
	// const styleInput = {
	// 	background: `linear-gradient(90deg, ${activeProgress} 0% ${
	// 		progres + '%'
	// 	},   ${inactiveProgress} ${progres + '%'} 100%)`
	// }

	return (
		<>
			<ul className={stls.filters}>
				<li>
					<SearchField />
				</li>
				<li>
					<h4 className={stls.title}>Формат обучения</h4>
					<div className={stls.content}>
						<Link href={`/programs`}>
							<span
								className={cn({
									[stls.circle]: true,
									[stls.active]: allPrograms
								})}></span>{' '}
							Все программы
						</Link>
						<Link href={`/programs/mini/${mbaFormat}`}>
							<span
								className={cn({
									[stls.circle]: true,
									[stls.active]: at.mini
								})}></span>{' '}
							Mini MBA
						</Link>

						<Link href={`/programs/mba/${mbaFormat}`}>
							<span
								className={cn({
									[stls.circle]: true,
									[stls.active]: at.mba
								})}></span>{' '}
							MBA
						</Link>

						<Link legacyBehavior href={`/programs/profession/online`}>
							<a
								onClick={() => {
									setCurStudyField(null)
									setIsNavigated(true)
								}}>
								<span
									className={cn({
										[stls.circle]: true,
										[stls.active]: at.profession
									})}></span>{' '}
								Профессии
							</a>
						</Link>

						<Link legacyBehavior href={`/programs/course/online`}>
							<a
								onClick={() => {
									setCurStudyField(null)
									setIsNavigated(true)
								}}>
								<span
									className={cn({
										[stls.circle]: true,
										[stls.active]: at.course
									})}></span>{' '}
								Курсы
							</a>
						</Link>

						<Link
							legacyBehavior
							href='/programs/international-business-law'
							{...(at.en ? { locale: 'ru' } : undefined)}>
							<a
								className={cn({
									[stls.highlight]: true,
									[stls.mbl]: true
								})}>
								MBL
							</a>
						</Link>
						<Link
							legacyBehavior
							href='/programs/executive'
							{...(at.en ? { locale: 'ru' } : undefined)}>
							<a className={stls.highlight}>
								Executive MBA <span className={stls.premium}>Premium</span>
							</a>
						</Link>
					</div>
				</li>
				<li>
					<div className={stls.content}>
						{at.profession || at.course ? (
							<a
								href='#!'
								className={cn({
									[stls.inactiveLink]: at.profession || at.course
								})}
								onClick={e => handleLinkClick(e)}>
								<span
									className={cn({
										[stls.circle]: true,
										[stls.active]: at.blended
									})}></span>{' '}
								BLENDED (с очными модулями)
							</a>
						) : (
							<Link
								legacyBehavior
								href={`/programs/${mbaTypeOfProgram}/blended`}>
								<a
									className={cn({
										[stls.inactiveLink]: at.profession || at.course
									})}
									onClick={e => handleLinkClick(e)}>
									<span
										className={cn({
											[stls.circle]: true,
											[stls.active]: at.blended
										})}></span>{' '}
									BLENDED (с очными модулями)
								</a>
							</Link>
						)}

						<Link href={`/programs/${mbaTypeOfProgram}/online`}>
							<span
								className={cn({
									[stls.circle]: true,
									[stls.active]: at.online
								})}></span>{' '}
							ONLINE (дистанционно){' '}
							<span className={stls.discount50}>
								<Discount />
							</span>
						</Link>
					</div>
				</li>
				<li>
					<FilterDuration />
				</li>
				{(at.profession || at.course) && studyFieldsFiltered && (
					<li>
						<h4 className={stls.title}>Направление</h4>
						<div className={stls.content}>
							{studyFieldsFiltered.map((field, idx) => (
								<button
									key={`field-btn-${idx}`}
									className={stls.fieldButton}
									onClick={() => handleSetCurStudyField(field)}>
									<>
										<span
											className={cn({
												[stls.circle]: true,
												[stls.active]: field === curStudyField
											})}></span>
										{field}
									</>
								</button>
							))}
						</div>
					</li>
				)}
			</ul>
		</>
	)
}

export default Filters
