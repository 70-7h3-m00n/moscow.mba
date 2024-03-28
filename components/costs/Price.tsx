import stls from '@/styles/components/costs/Price.module.sass'
import cn from 'classnames'

import { price } from '@/config/index'
import { toNumberWithSpaces } from '@/helpers/index'
import { useAt } from '@/hooks/index'
import { Ruble } from './Ruble/Ruble'

const Price = ({
	fullPrice = true,
	discount = false,
	type = null,
	format = null,
	programPrice = null,
	renderedByComponent = null
}) => {
	const at = useAt()

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
					<span className={stls.currency}>
						<Ruble />
						/мес
					</span>
				</>
			)
		} else {
			return <span>{toNumberWithSpaces(price)}</span>
		}
	}

	if ((!format && at.executive) || (!format && type === 'executive'))
		return (
			<span
				className={cn(stls.executive, {
					[stls.SectionStudyCost]: renderedByComponent === 'SectionStudyCost'
				})}
			>
				{price[isDiscounted].executive}
			</span>
		)

	return (
		<>
			<span className={stls.priceWrapper}>
				<i>{splitMonths(price?.[isDiscounted]?.[type]?.[format])}</i>
				<Ruble />
			</span>
			{discount && fullPrice && (
				<span className={cn(stls.priceWrapper, stls.discount)}>
					<i
						className={cn({
							[stls.SectionStudyCost]:
								renderedByComponent === 'SectionStudyCost'
						})}
					>
						{splitMonths(price?.regular?.[type]?.[format] || 0)}
					</i>
					<Ruble />
				</span>
			)}
		</>
	)
}

export default Price
