import usePrograms from '@/hooks/usePrograms'
import stls from '@/styles/components/general/SortingPrograms.module.sass'
import { useState } from 'react'

const SortingPrograms = () => {
	const [isActiveModal, setIsActiveModal] = useState(false)
	const LIST_MODAL_SORTING = [
		{ name: 'byDefault', text: 'По умолчанию' },
		{ name: 'byNovelty', text: 'По новизне' },
		{ name: 'byAlphabet', text: 'По алфавиту от А до Я' }
	]
	const { configPrograms, handlerSetConfigPrograms } = usePrograms()

	return (
		<div className={stls.sortingPrograms}>
			<button
				className={stls.sortingButton}
				onClick={() => setIsActiveModal(isActiveModal => !isActiveModal)}>
				<div className={stls.stars}>
					<svg
						width='10'
						height='16'
						viewBox='0 0 10 16'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
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
						className={stls.starRotate}>
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
					}`}>
					Сортировка
				</p>
				<div
					className={`${stls.starDirection} ${
						isActiveModal ? stls.starDirectionActive : ''
					}`}>
					<svg
						width='14'
						height='8'
						viewBox='0 0 14 8'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
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
					{LIST_MODAL_SORTING.map((item, index) => (
						<div key={item.name} className={stls.itemModalSorting}>
							<input
								type='radio'
								name='itemSorting'
								value={item.name}
								id={item.name}
								onChange={e =>
									handlerSetConfigPrograms({ sorting: e.target.value })
								}
								checked={configPrograms.sorting === item.name}
							/>
							<label className={stls.labelModalSorting} htmlFor={item.name}>
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
