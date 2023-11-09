import stls from '@/styles/components/costs/Price.module.sass'
import { useEffect, useState } from 'react'
import cn from 'classnames'
import { currencyRates, ui } from '@/config/index'
import { toNumberWithSpaces } from '@/helpers/index'
import { useAt, useSSLocale } from '@/hooks/index'

const Price = ({
	discount = false,
	type = null,
	format = null,
	programPrice = null,
	renderedByComponent = null
}) => {
	const at = useAt()

	const SSLocale = useSSLocale()

	const atKz =
		at.kz || SSLocale === 'kz' || SSLocale === 'kk' || SSLocale === 'kk_KZ'

	const atUz = at.uz || SSLocale === 'uz' || SSLocale === 'uz_UZ'

	const programPriceKzUzConsidered = atKz
		? programPrice * currencyRates.kzt
		: atUz
		? programPrice * currencyRates.uzm
		: programPrice

	const currencySymbol = atKz
		? ui.currentlySymbols.kzt
		: atUz
		? ui.currentlySymbols.uzm
		: ui.currentlySymbols.rubAlt

	const setPrice = (rub: number) => {
		return atKz
			? toNumberWithSpaces(rub * currencyRates.kzt)
			: atUz
			? toNumberWithSpaces(rub * currencyRates.uzm)
			: toNumberWithSpaces(rub)
	}

	const price = {
		regular: {
			mini: {
				online: setPrice(178000),
				blended: setPrice(189000)
			},
			mba: {
				online: setPrice(318000),
				blended: setPrice(328000)
			},
			profession: {
				online: setPrice(70000)
			},
			course: {
				online: setPrice(70000)
			},
			mbl: {
				online: setPrice(318000)
			},
			executive: setPrice(1400000)
		},
		discounted: {
			mini: {
				online: setPrice(97900)
			},
			mba: {
				online: setPrice(174900)
			},
			profession: {
				online: setPrice(38900)
			},
			course: {
				online: setPrice(38900)
			},
			mbl: {
				online: setPrice(174900)
			},
			executive: setPrice(1400000)
		}
	}

	const componentSpecificClasses = {
		simple: {
			ProgramsColumn: stls.programsColumnSimplePrice
		},
		new: {
			ProgramsColumn: stls.programsColumnNewPrice,
			InfoRectangle: stls.infoRectangleNewPrice,
			CardProgram: stls.cardProgramNewPrice,
			CostOfStudy: stls.costOfStudyNewPrice
		},
		old: {
			ProgramsColumn: stls.programsColumnOldPrice,
			CostOfStudy: stls.costOfStudyOldPrice,
			InfoRectangle: stls.infoRectangleOldPrice,
			CardProgram: stls.cardProgramOldPrice
		}
	}

	const generalClasses = {
		simple: stls.simplePrice,
		new: stls.newPrice,
		old: stls.oldPrice
	}

	const getPriceClass = (typeOfPrice, renderedByComponent) => {
		if (!renderedByComponent) return `${typeOfPrice}-price`

		const componentSpecificClass =
			componentSpecificClasses[typeOfPrice]?.[renderedByComponent]
		const generalClass = generalClasses[typeOfPrice]

		return componentSpecificClass ?? generalClass
	}

	const isDiscounted = discount ? 'discounted' : 'regular'

	const splitMonths = price => {
		if (!price) {
			price = '0'
		}
		let period =
			type === 'mini'
				? 9
				: 'mba' || 'mbl'
				? 18
				: 'profession' || 'course'
				? 4
				: 'executive'
				? 26
				: null
		if (renderedByComponent === 'CostOfStudy') {
			return (
				<>
					{Array.from(
						Math.ceil(price?.replace(' ', '') / period).toString()
					).map((el, idx, array) => {
						return (array.length - idx) % 3 === 0 ? ' ' + el : el
					})}
					<span className={stls.currency}>&#8381;/мес</span>
				</>
			)
		} else {
			return price + ` ${currencySymbol}`
		}
	}

	if ((!format && at.executive) || (!format && type === 'executive'))
		return (
			<span
				className={cn(stls.executive, {
					[stls.SectionStudyCost]: renderedByComponent === 'SectionStudyCost'
				})}
			>
				{price[isDiscounted].executive} {currencySymbol}
			</span>
		)

	return (
		<>
			{discount && (
				<i
					className={cn('price', getPriceClass('old', renderedByComponent), {
						[stls.SectionStudyCost]: renderedByComponent === 'SectionStudyCost'
					})}
				>
					{programPriceKzUzConsidered
						? toNumberWithSpaces(
								Math.ceil(((programPriceKzUzConsidered / 45) * 100) / 1000) *
									1000
						  ) + ` ${currencySymbol}`
						: splitMonths(price?.regular?.[type]?.[format] || 0)}
				</i>
			)}
			<i
				className={cn(
					'price',
					discount
						? getPriceClass('new', renderedByComponent)
						: getPriceClass('simple', renderedByComponent)
				)}
			>
				{programPriceKzUzConsidered
					? toNumberWithSpaces(programPriceKzUzConsidered) +
					  ` ${currencySymbol}`
					: splitMonths(price?.[isDiscounted]?.[type]?.[format])}
			</i>
		</>
	)
}

export default Price
