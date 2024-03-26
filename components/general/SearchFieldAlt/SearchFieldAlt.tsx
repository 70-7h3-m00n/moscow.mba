import stls from './SearchFieldAlt.module.sass'
import cn from 'classnames'
import { SearchFieldAltProps } from './types'

import { useContext, useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Highlighter from 'react-highlight-words'
import { ContextStaticProps, OverlayContext } from '@/context/index'
import { LeadLoaderThankyou } from '@/components/general'
import useDecodedInput from '@/hooks/useDecodedInput'
import { checkMatchAtBeginning } from './fractals/hooks/searchMatch'
import { NoResult } from './widgets'
import { Tag } from 'modules/program-page/widgets'
import { Search } from '@/components/inputs/Search/Search'

export const SearchFieldAlt = ({ className }: SearchFieldAltProps) => {
	const { programs } = useContext(ContextStaticProps)
	const [inputIsFocused, setInputIsFocused] = useState(false)

	const {
		clearInput,
		handleInput,
		searchTerm,
		decodedEnInput
	} = useDecodedInput('')

	const { overlayIsShown, showOverlay, hideOverlay } = useContext(
		OverlayContext
	)

	const [open, setOpen] = useState(false)
	const [openLoader, setOpenLoader] = useState(false)

	const programsNotBlended = programs?.filter(
		program => program.studyFormat !== 'blended'
	)

	const filteredPrograms = programsNotBlended
		?.filter(
			program =>
				(decodedEnInput &&
					program?.title
						?.toLowerCase()
						?.replace(/-/g, ' ')
						.includes(decodedEnInput)) ||
				(searchTerm &&
					program?.title
						?.toLowerCase()
						?.replace(/-/g, ' ')
						.includes(searchTerm.toLocaleLowerCase()))
		)
		?.sort(
			program =>
				searchTerm &&
				checkMatchAtBeginning(program?.title, decodedEnInput || searchTerm)
		)

	useEffect(() => {
		inputIsFocused && document.getElementById('SearchField-input')?.focus()
	}, [inputIsFocused])

	useEffect(() => {
		if (searchTerm !== '') {
			showOverlay()
		} else {
			hideOverlay()
		}
	}, [searchTerm])

	useEffect(() => {
		if (!overlayIsShown) {
			clearInput()
		}
	}, [overlayIsShown])

	const handlerLink = () => {
		hideOverlay()
	}

	return (
		<>
			<div className={cn(className, stls.content)}>
				<Search
					id={'SearchField-input'}
					type='text'
					className={stls.input}
					value={searchTerm}
					placeholder={'Поиск'}
					onChange={handleInput}
					autoComplete='off'
					handlerClearSearch={clearInput}
				/>
				<div className={stls.modal}>
					{searchTerm && filteredPrograms.length > 0 && (
						<ul className={stls.list}>
							{filteredPrograms?.map((program, idx) => (
								<li
									className={stls.list__item}
									key={program?.id || `SearchField__filteredPrograms-${idx}`}
								>
									<Link
										className={stls.link}
										onClick={handlerLink}
										href={`/programs/${program?.category?.type}/${program?.studyFormat}/${program?.slug}`}
									>
										<Tag className={stls.label} variant='delta'>
											{program?.category?.type === 'mini'
												? 'Mini MBA'
												: program?.category?.type === 'profession'
												? 'Профессии'
												: program?.category?.type === 'course'
												? 'Курсы'
												: program?.category?.type === 'executive'
												? 'Executive MBA'
												: 'MBA'}
										</Tag>
										<p className={stls.p}>
											<Highlighter
												highlightClassName={stls.highlight}
												searchWords={[decodedEnInput || searchTerm]}
												autoEscape={true}
												highlightTag={'span'}
												textToHighlight={program?.title}
											/>
										</p>
									</Link>
								</li>
							))}
						</ul>
					)}
					{searchTerm && filteredPrograms.length === 0 && (
						<NoResult
							className={stls.noResult}
							setOpenLoader={setOpenLoader}
							setOpen={setOpen}
						/>
					)}
				</div>
			</div>

			<LeadLoaderThankyou
				open={open}
				setOpen={setOpen}
				openLoader={openLoader}
				setOpenLoader={setOpenLoader}
				programId={null}
				programTitle={null}
			/>
		</>
	)
}
