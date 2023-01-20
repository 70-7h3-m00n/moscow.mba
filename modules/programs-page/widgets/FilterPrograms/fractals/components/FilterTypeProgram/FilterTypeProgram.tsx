import {
	useConfigProgramsContext,
	LIST_FILTER_TYPE_PROGRAM
} from 'modules/programs-page/fractals'
import Link from 'next/link'
import { useState } from 'react'
import stls from './FilterTypeProgram.module.sass'

const FilterTypeProgram = () => {
	const { configPrograms, setConfigPrograms } = useConfigProgramsContext()
	const [isShowFilter, setIsShowFilter] = useState(true)

	return (
		<div className={stls.filterTypeProgram}>
			<p
				className={stls.filterTitle}
				onClick={() => setIsShowFilter(isShowFilter => !isShowFilter)}>
				Тип программы <span className={stls.sale}>-45%</span>
				<span
					className={`${stls.circle} ${isShowFilter ? stls.isShowCircle : ''}`}>
					<svg
						width='14'
						height='8'
						viewBox='0 0 14 8'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M13 7L7 1L1 7'
							stroke='white'
							stroke-width='2'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</svg>
				</span>
			</p>
			<div className={isShowFilter ? stls.isShowFilter : ''}>
				{LIST_FILTER_TYPE_PROGRAM.map((item, index) => (
					<div key={item.value} className={stls.itemFilterTypeProgram}>
						<input
							type='radio'
							name='filterTypeProgram'
							value={item.value}
							id={item.value}
							onChange={e =>
								setConfigPrograms(configPrograms => ({
									...configPrograms,
									filterTypeProgram: e.target.value
								}))
							}
							checked={item.value === configPrograms.filterTypeProgram}
						/>
						<label className={stls.labelModalSorting} htmlFor={item.value}>
							{item.text}
						</label>
					</div>
				))}
				<Link href='/programs/executive'>
					<a className={stls.highlight}>
						Executive MBA <span className={stls.premium}>Premium</span>
					</a>
				</Link>
			</div>
		</div>
	)
}

export default FilterTypeProgram
