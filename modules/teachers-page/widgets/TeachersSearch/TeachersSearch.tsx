import stls from '../../TeachersPage.module.sass'
import cn from 'classnames'
import { TeachersSearchProps } from './types'

import useAt from '@/hooks/useAt'
import { IconClose, IconSearch } from '@/components/icons'
import { useContext, useEffect } from 'react'
import { ContextStaticProps } from '@/context/index'
import { useRouter } from 'next/router'
import { useTeachersSearch } from 'modules/teachers-page/fractals/context/context'
import { ACTION } from 'modules/teachers-page/fractals/context/reducer'
import { ProgramSearchItem, TeachersSearchItem } from './widgets'

export const TeachersSearch = ({}: TeachersSearchProps) => {
	const at = useAt()
	const router = useRouter()
	const { programs } = useContext(ContextStaticProps)
	const { state, dispatch } = useTeachersSearch()

	const {
		searchTerm,
		searchTermIsAppliedtoUrl,
		searchInputIsFocused,
		teachers
	} = state

	const handleSearch = e => {
		dispatch({
			type: ACTION.APPLY_SEARCH_TERM_TO_URL,
			payload: { searchTerm: e.target.value, searchTermIsApplied: false }
		})
	}

	const setEmptyInput = () => {
		dispatch({
			type: ACTION.SET_EMPTY_INPUT,
			payload: {
				searchTermIsApplied: false,
				setInputClose: true
			}
		})

		router.replace({ query: { q: '' } }, undefined, {
			shallow: true,
			scroll: false
		})
	}

	const handleOnFocus = () => {
		dispatch({
			type: ACTION.SET_HANDLE_ON_FOCUS,
			payload: { searchInputIsFocused: true, searchTermIsAppliedtoUrl: false }
		})

		if (router.query.q) {
			router.replace({ query: { q: undefined } }, undefined, {
				shallow: true,
				scroll: false
			})
		}
	}

	const setSearchInputIsFocused = (status: boolean): void => {
		dispatch({
			type: ACTION.SET_SEARCH_TERM_INPUT_FOCUSED,
			payload: status
		})
	}

	useEffect(() => {
		if (router.query.q && router.query.q !== '') {
			dispatch({
				type: ACTION.APPLY_SEARCH_TERM_TO_URL,
				payload: {
					searchTerm: decodeURIComponent(router.query.q?.toString()),
					searchTermIsApplied: true
				}
			})
		}
	}, [router])

	return (
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
								[stls.searchIconSearthTermIsApplied]: searchTermIsAppliedtoUrl
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
								[stls.searchTermIsAppliedtoUrl]: searchTermIsAppliedtoUrl
							})}
							onChange={handleSearch}
							onFocus={handleOnFocus}
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
							{teachers
								?.filter(teacher =>
									teacher.name?.toLowerCase().includes(searchTerm.toLowerCase())
								)
								?.map((teacher, idx) => (
									<TeachersSearchItem
										key={`Teachers_searchResults_${teacher?.name}-${idx}`}
										teacher={teacher}
									/>
								))}

							{programs
								?.filter(program => program.studyFormat === 'online')
								?.filter(program =>
									program?.title
										?.toLowerCase()
										.includes(searchTerm.toLowerCase())
								)
								.filter((_, idx) => idx < 10)
								.map((program, idx) => (
									<ProgramSearchItem
										key={`Teachers_searchResults_${program?.title}-${idx}`}
										program={program}
									/>
								))}
						</ul>
					)}
				</div>
			)}
		</>
	)
}
