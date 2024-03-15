import stls from '@/styles/components/costs/Loan.module.sass'
import cn from 'classnames'
import { ui, currencyRates } from '@/config/index'
import { toNumberWithSpaces } from '@/helpers/index'
import { useAt, useSSLocale } from '@/hooks/index'

type TypeLoanProps = {
	discount?: boolean
	type?: string | null
	format?: string | null
	notComparingPrices?: boolean
	renderedByComponent?: string | null
	programPrice?: number | null
	variant?: 'SectionStudyCost' | 'programPage' | 'programsPage'
}

export const price = {
	loanRegular: {
		mini: {
			online: toNumberWithSpaces(18250),
			blended: toNumberWithSpaces(29150)
		},
		mba: {
			online: toNumberWithSpaces(28900),
			blended: toNumberWithSpaces(37500)
		},
		profession: {
			online: toNumberWithSpaces(6000)
		},
		course: {
			online: toNumberWithSpaces(6000)
		},
		mbl: {
			online: toNumberWithSpaces(26500)
		}
	},
	loanDiscounted: {
		mini: {
			online: toNumberWithSpaces(10050)
		},
		mba: {
			online: toNumberWithSpaces(15900)
		},
		profession: {
			online: toNumberWithSpaces(3250)
		},
		course: {
			online: toNumberWithSpaces(3250)
		},
		mbl: {
			online: toNumberWithSpaces(14600)
		}
	}
}

const Loan = ({
	discount = false,
	type = null,
	format = null,
	notComparingPrices = false,
	renderedByComponent = null,
	programPrice = null,
	variant
}: TypeLoanProps) => {
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
		? `${ui.currentlySymbols.kzt}/мес`
		: atUz
		? `${ui.currentlySymbols.uzm}/мес`
		: `${ui.currentlySymbols.rubAlt}/мес`

	// const setPrice = (rub: number) => {
	// 	return atKz
	// 		? toNumberWithSpaces(rub * currencyRates.kzt)
	// 		: atUz
	// 		? toNumberWithSpaces(rub * currencyRates.uzm)
	// 		: toNumberWithSpaces(rub)
	// }

	const regularOrDiscounted = discount ? 'loanDiscounted' : 'loanRegular'

	const componentSpecificClasses = {
		simple: {},
		new: {},
		old: {
			CostOfStudy: stls.costOfStudyOldPrice
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

		return componentSpecificClass ? componentSpecificClass : generalClass
	}

	const regularPrice =
		programPriceKzUzConsidered &&
		Math.ceil(((programPriceKzUzConsidered / 45) * 100) / 1000) * 1000

	const regularPriceUI = programPriceKzUzConsidered
		? toNumberWithSpaces(Math.floor(programPriceKzUzConsidered / 12))
		: price[regularOrDiscounted]?.[type]?.[format]

	const discountPriceUI = programPriceKzUzConsidered
		? toNumberWithSpaces(Math.floor(regularPrice / 12))
		: price.loanRegular[type]?.[format]

	return (
		<>
			<i
				className={cn(
					'price',
					discount
						? getPriceClass('new', renderedByComponent)
						: getPriceClass('simple', renderedByComponent),
					{
						[stls.price]: variant === 'SectionStudyCost',
						[stls.programPagePrice]: variant === 'programPage',
						[stls.smallerFontForSmallerLength]:
							variant === 'SectionStudyCost' &&
							regularPriceUI?.toString()?.length > 5
					}
				)}
			>
				<span>
					{regularPriceUI}{' '}
					<span
						className={cn({
							[stls.priceLabel]: variant === 'SectionStudyCost',
							[stls.smallerFontForSmallerLength]:
								variant === 'SectionStudyCost' &&
								regularPriceUI?.toString()?.length > 5
						})}
					>
						{currencySymbol}
					</span>
				</span>
			</i>
			{discount &&
				!at.blended &&
				!notComparingPrices &&
				variant !== 'programsPage' && (
					<>
						<i
							className={cn(
								'price',
								getPriceClass('old', renderedByComponent),
								{
									[stls.discount]: variant === 'SectionStudyCost',
									[stls.programPageOldPrice]: variant === 'programPage'
								}
							)}
						>
							<span
								className={cn(stls.discountNum, {
									[stls.discountNum]: variant === 'SectionStudyCost'
								})}
							>
								{discountPriceUI}
							</span>{' '}
							<span
								className={cn({
									[stls.discountLabel]: variant === 'SectionStudyCost'
								})}
							>
								{currencySymbol}
							</span>
						</i>
					</>
				)}
			{variant === 'SectionStudyCost' && (
				<span className={stls.priceLabelInfo}>*рассрочка на 12 месяцев</span>
			)}
		</>
	)
}

export default Loan
