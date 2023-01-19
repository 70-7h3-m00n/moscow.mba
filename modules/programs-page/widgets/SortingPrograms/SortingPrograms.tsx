import { useConfigProgramsContext } from '../../fractals'
import stls from './SortingPrograms.module.sass'
import { useContext, useState } from 'react'
import { LIST_SORTING } from '../../fractals'
import { ContextStaticProps } from '@/context/index'

const SortingPrograms = () => {
	const [isActiveModal, setIsActiveModal] = useState(false)
	const { configPrograms, setConfigPrograms } = useConfigProgramsContext()

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
							stroke-width='2'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
						<path
							d='M9 11L5 15L1 11'
							stroke='#FF3535'
							stroke-width='2'
							stroke-linecap='round'
							stroke-linejoin='round'
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
							stroke-width='2'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
						<path
							d='M9 11L5 15L1 11'
							stroke='#FF3535'
							stroke-width='2'
							stroke-linecap='round'
							stroke-linejoin='round'
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
							stroke-width='2'
							stroke-linecap='round'
							stroke-linejoin='round'
							className={`${stls.starPath} ${
								isActiveModal ? stls.starPathActive : ''
							}`}
						/>
					</svg>
				</div>
			</button>
			{isActiveModal && (
				<div className={stls.modalSorting}>
					{LIST_SORTING.map((item, index) => (
						<div key={item.value} className={stls.itemModalSorting}>
							<input
								type='radio'
								name='itemSorting'
								value={item.value}
								id={item.value}
								onChange={e =>
									setConfigPrograms(configPrograms => ({
										...configPrograms,
										sorting: e.target.value
									}))
								}
								checked={configPrograms?.sorting === item.value}
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
