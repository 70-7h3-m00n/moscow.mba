import { ruCase } from '@/helpers/index'
import { useAt } from '@/hooks/index'

const TrainingPeriodHours = ({ period = null, type = null }) => {
	const at = useAt()

	const periodMapping = {
		mini: 1260,
		mba: 3420,
		profession: 980,
		course: 140,
		executive: 4520,
		mbl: 3420
	}

	const getHoursText = type => {
		const hours = periodMapping[type] || period
		return (
			<>
				{hours} {at.en ? 'hours' : ruCase(hours, ['час', 'часа', 'часов'])}
			</>
		)
	}

	if (period || periodMapping[type]) return getHoursText(type)

	return null
}

export default TrainingPeriodHours
