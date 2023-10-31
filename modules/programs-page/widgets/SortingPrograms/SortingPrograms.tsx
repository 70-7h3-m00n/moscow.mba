import stls from './SortingPrograms.module.sass'

import { useEffect, useState } from 'react'
import {
	LIST_SORTING,
	SortingsEnum,
	SortingEnum,
	useConfigProgramsContext
} from 'modules/programs-page/fractals'

const SortingPrograms = () => {
	const [isActiveModal, setIsActiveModal] = useState(false)
	const { configPrograms, handlerSetConfigPrograms, router } =
		useConfigProgramsContext()

	useEffect(() => {
		if (router.isReady) {
			if (router.query?.[SortingsEnum.sorting]) {
				const isSortingInURL = Object.keys(SortingEnum)?.includes(
					router.query?.[SortingsEnum.sorting]
				)

				isSortingInURL &&
					handlerSetConfigPrograms({
						[SortingsEnum.sorting]: router.query?.[SortingsEnum.sorting]
					})
			}
		}
	}, [router.isReady])

	const handlerOnChange = e => {
		handlerSetConfigPrograms({
			[SortingsEnum.sorting]: e.target.value
		})
	}

	return (
		<div className={stls.sortingPrograms}>
			<button
				className={stls.sortingButton}
				onClick={() => setIsActiveModal(isActiveModal => !isActiveModal)}
			>
				<div className={stls.stars}>
					<svg
						width='10'
						height='16'
						viewBox='0 0 10 16'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M5 1V15'
							stroke='#FF3535'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M9 11L5 15L1 11'
							stroke='#FF3535'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
					<svg
						width='10'
						height='16'
						viewBox='0 0 10 16'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className={stls.starRotate}
					>
						<path
							d='M5 1V15'
							stroke='#FF3535'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M9 11L5 15L1 11'
							stroke='#FF3535'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</div>
				<p
					className={`${stls.titleSort} ${
						isActiveModal ? stls.titleSortActive : ''
					}`}
				>
					Сортировка
				</p>
				<div
					className={`${stls.starDirection} ${
						isActiveModal ? stls.starDirectionActive : ''
					}`}
				>
					<svg
						width='14'
						height='8'
						viewBox='0 0 14 8'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M13 7L7 1L1 7'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
							className={`${stls.starPath} ${
								isActiveModal ? stls.starPathActive : ''
							}`}
						/>
					</svg>
				</div>
			</button>
			{isActiveModal && (
				<div className={stls.modalSorting}>
					{LIST_SORTING.map(item => (
						<div key={item.value} className={stls.itemModalSorting}>
							<input
								type='radio'
								name={SortingsEnum.sorting}
								value={item.value}
								id={item.value}
								onChange={e => handlerOnChange(e)}
								checked={configPrograms?.[SortingsEnum.sorting] === item.value}
							/>
							<label className={stls.labelModalSorting} htmlFor={item.value}>
								{item.text}
							</label>
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default SortingPrograms
