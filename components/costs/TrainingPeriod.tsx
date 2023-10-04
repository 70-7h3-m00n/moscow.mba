import { ruCase } from '@/helpers/index'
import { useAt } from '@/hooks/index'

const TrainingPeriod = ({ period = null, type = null }) => {
	const at = useAt()

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
			{months}{' '}
			{at.en ? 'month' : ruCase(months, ['месяц', 'месяца', 'месяцев'])}
		</>
	)
}

export default TrainingPeriod
