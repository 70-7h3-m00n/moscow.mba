import stls from './SearchField.module.sass'
import cn from 'classnames'

import { useContext, useState, MouseEventHandler, useEffect } from 'react'
import Link from 'next/link'
import Popup from 'reactjs-popup'
import Highlighter from 'react-highlight-words'
import { colors } from '@/config/index'
import { ContextStaticProps } from '@/context/index'
import { useAt } from '@/hooks/index'
import { LeadLoaderThankyou } from '@/components/general'
import { Wrapper } from '@/components/layout'
import { IconSearch, IconClose } from '@/components/icons'
import useDecodedInput from '@/hooks/useDecodedInput'
import { checkMatchAtBeginning } from './fractals/hooks/searchMatch'
import { NoResult } from './widgets'

const SearchField = ({ header = false }) => {
	const at = useAt()
	const { clearInput, handleInput, searchTerm, decodedEnInput } =
		useDecodedInput('')
	const [inputIsFocused, setInputIsFocused] = useState(false)

	const { programs } = useContext(ContextStaticProps)

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

	return (
		<>
			<Popup
				trigger={() => (
					<button
						className={cn({
							[stls.btn]: !header,
							[stls.btnHeader]: header
						})}
					>
						<IconSearch classNames={[stls.iconSearchAtBtn]} />{' '}
						{!header && `Поиск`}
					</button>
				)}
				modal
				lockScroll
				nested
				closeOnDocumentClick
				closeOnEscape
				onOpen={() => setInputIsFocused(true)}
				onClose={() => setInputIsFocused(false)}
				position={'top center'}
				className='popup-SearchField'
			>
				{/* @ts-expect-error  */}
				{(close: MouseEventHandler) => (
					<div className={stls.popupContainer}>
						<a href='#!' onClick={close} className={stls.iconCloseBtn}>
							<IconClose
								classNames={[stls.iconClose]}
								stroke={colors.omicron}
							/>
						</a>
						<Wrapper column classNames={[stls.wrapper, stls.wrapper2]}>
							<div className={stls.inputGroup}>
								<IconSearch
									classNames={[stls.iconSearchAtInput]}
									color={colors.omicron}
								/>{' '}
								<input
									id={'SearchField-input'}
									type='text'
									className={stls.input}
									value={searchTerm}
									placeholder={'Поиск'}
									onChange={handleInput}
									autoComplete='off'
								/>
								{searchTerm && (
									<a
										href='#!'
										onClick={clearInput}
										className={stls.iconClearBtn}
									>
										<IconClose
											classNames={[stls.iconClear]}
											stroke={colors.alpha}
										/>
									</a>
								)}
							</div>
							<ul className={stls.list}>
								{filteredPrograms?.map((program, idx) => (
									<li
										key={program?.id || `SearchField__filteredPrograms-${idx}`}
										className={stls.listItem}
									>
										<Link
											legacyBehavior
											href={`/programs/${program?.category?.type}/${program?.studyFormat}/${program?.slug}`}
										>
											<a onClick={close} className={stls.listItemLink}>
												<p className={stls.p}>
													<Highlighter
														highlightClassName={stls.highlight}
														searchWords={[decodedEnInput || searchTerm]}
														autoEscape={true}
														highlightTag={'span'}
														textToHighlight={program?.title}
													/>
												</p>
												<span className={stls.label}>
													{program?.category?.type === 'mini'
														? 'Mini MBA'
														: program?.category?.type === 'profession'
														? 'Профессии'
														: program?.category?.type === 'course'
														? 'Курсы'
														: program?.category?.type === 'executive'
														? 'Executive MBA'
														: 'MBA'}
												</span>
											</a>
										</Link>
									</li>
								))}
							</ul>

							{searchTerm && filteredPrograms.length === 0 && (
								<NoResult setOpenLoader={setOpenLoader} setOpen={setOpen} />
							)}
						</Wrapper>
					</div>
				)}
			</Popup>
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

export default SearchField
