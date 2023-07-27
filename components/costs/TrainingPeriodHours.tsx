import { ruCaseHours, ruCaseMonth } from '@/helpers/index'
import { useAt } from '@/hooks/index'

const TrainingPeriodHours = ({ period = null, type = null }) => {
	const at = useAt()

	if (period)
		return (
			<>
				{period} {at.en ? 'hours' : ruCaseHours(period)}
			</>
		)
	return (
		<>
			{type === 'mini' && <>1260 {at.en ? 'hours' : ruCaseHours(1260)}</>}
			{type === 'mba' && <>3420 {at.en ? 'hours' : ruCaseHours(3420)}</>}
			{type === 'profession' && <>980 {at.en ? 'hours' : ruCaseHours(980)}</>}
			{type === 'course' && <>140 {at.en ? 'hours' : ruCaseHours(140)}</>}
			{type === 'executive' && <>4520 {at.en ? 'hours' : ruCaseHours(4520)}</>}
			{type === 'mbl' && <>3420 {at.en ? 'hours' : ruCaseHours(3420)}</>}
		</>
	)
}

export default TrainingPeriodHours
