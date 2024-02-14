import { ruCase } from '@/helpers/index'
import { useAt } from '@/hooks/index'

const TrainingPeriod = ({
	period = null,
	type = null,
	justNumbers = false
}) => {
	const at = useAt()

	const addFrontZeroToNumber = (n: number) => ('0' + n).slice(-2)

	const typeToMonths = {
		mini: 9,
		mba: 18,
		profession: 4,
		course: 4,
		executive: 26,
		mbl: 18
	}

	let months

	if (period) {
		months = period
	} else if (typeToMonths[type]) {
		months = typeToMonths[type]
	} else {
		return null
	}

	return (
		<>
			{justNumbers ? (
				<>{months % 1 === 0 ? addFrontZeroToNumber(months) : months}</>
			) : (
				<>
					{months}&nbsp;
					{at.en ? 'month' : ruCase(months, ['месяц', 'месяца', 'месяцев'])}
				</>
			)}
		</>
	)
}

export default TrainingPeriod
