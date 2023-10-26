import stls from './FilterDirection.module.sass'

import { useEffect, useState } from 'react'
import {
	useConfigProgramsContext,
	usePrograms,
	FiltersEnum
} from 'modules/programs-page/fractals'

const FilterDirection = () => {
	const { uniqueDirections, minMaxDuration } = usePrograms()
	const {
		configPrograms,
		handlerSetConfigPrograms,
		router,
		handlerDeleteConfigPrograms
	} = useConfigProgramsContext()
	const [isFullDirection, setIsFullDirection] = useState(false)

	const showInitiallyDirection = 1

	useEffect(() => {
		if (router.isReady) {
			if (router.query?.[FiltersEnum.filterDirection]) {
				const isFilterInURL = uniqueDirections?.includes(
					decodeURIComponent(router.query?.[FiltersEnum.filterDirection])
				)

				handlerSetConfigPrograms({
					[FiltersEnum.filterDirection]: isFilterInURL
						? decodeURIComponent(router.query?.[FiltersEnum.filterDirection])
						: 'all'
				})
			} else {
				handlerSetConfigPrograms({
					[FiltersEnum.filterDirection]: 'all'
				})
			}
		}

		return () => {
			handlerDeleteConfigPrograms(FiltersEnum.filterDirection)
		}
	}, [router.isReady, uniqueDirections?.[0]])

	const handlerOnChange = e => {
		handlerSetConfigPrograms({
			[FiltersEnum.filterDirection]: e.target.value
		})
	}

	return (
		<div className={stls.filterDirection}>
			<p className={stls.filterTitle}>Направление</p>
			<div
				key={'all'}
				className={`${stls.itemFilterDirection} ${
					isFullDirection ? stls.itemFilterDirectionActive : ''
				}`}
			>
				<input
					type='radio'
					name={FiltersEnum.filterDirection}
					value={'all'}
					id={'all'}
					onChange={e => handlerOnChange(e)}
					checked={configPrograms?.[FiltersEnum.filterDirection] === 'all'}
					className={stls.inputNotActive}
				/>
				<label className={stls.labelModalSorting} htmlFor={'all'}>
					{'Все направления'}
				</label>
			</div>
			{uniqueDirections
				?.filter(item => item)
				?.map(item => (
					<div
						key={item}
						className={`${stls.itemFilterDirection} ${
							isFullDirection ? stls.itemFilterDirectionActive : ''
						}`}
					>
						<input
							type='radio'
							name={FiltersEnum.filterDirection}
							value={item}
							id={item}
							onChange={e => handlerOnChange(e)}
							checked={item === configPrograms?.[FiltersEnum.filterDirection]}
							className={stls.inputNotActive}
						/>
						<label className={stls.labelModalSorting} htmlFor={item}>
							{item}
						</label>
					</div>
				))}
			{!isFullDirection && (
				<div className={stls.fullDirection}>
					<button
						onClick={() => setIsFullDirection(true)}
						className={stls.buttonFullDirection}
					>
						<span>{`еще ${
							uniqueDirections?.length - showInitiallyDirection
						} направления`}</span>
						<span>
							<svg
								width='14'
								height='17'
								viewBox='0 0 14 17'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M3.04 12.976L3.936 11.856C3.856 11.776 3.776 11.712 3.712 11.632C2.784 10.72 2.288 9.488 2.288 8.224C2.288 6.208 3.488 4.4 5.376 3.648L5.456 6.016L8.464 2.8L5.248 0.143999L5.328 2.176C2.688 2.976 0.816 5.392 0.816 8.192C0.816 9.856 1.456 11.44 2.64 12.624C2.784 12.768 2.896 12.88 3.04 12.976ZM9.008 16.304L8.928 14.256C11.6 13.472 13.456 11.024 13.456 8.208C13.456 6.592 12.816 4.992 11.696 3.872C11.504 3.68 11.392 3.6 11.28 3.504L10.336 4.576C10.416 4.656 10.496 4.736 10.576 4.8C11.488 5.728 11.984 6.96 11.984 8.24C11.984 10.256 10.768 12.064 8.896 12.8L8.816 10.416L5.824 13.632L9.008 16.304Z'
									className={stls.pathCircle}
								/>
							</svg>
						</span>
					</button>
				</div>
			)}
		</div>
	)
}

export default FilterDirection
