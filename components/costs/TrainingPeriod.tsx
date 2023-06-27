import { ruCaseMonth } from '@/helpers/index'
import { useAt } from '@/hooks/index'

const TrainingPeriod = ({ period = null, type = null }) => {
	const at = useAt()

	if (period)
		return (
			<>
				{period} {at.en ? 'month' : ruCaseMonth(period)}
			</>
		)
	return (
		<>
			{type === 'mini' && <>9 {at.en ? 'month' : ruCaseMonth(9)}</>}
			{type === 'mba' && <>18 {at.en ? 'month' : ruCaseMonth(18)}</>}
			{type === 'profession' && <>4 {at.en ? 'month' : ruCaseMonth(4)}</>}
			{type === 'course' && <>4 {at.en ? 'month' : ruCaseMonth(4)}</>}
			{type === 'executive' && <>26 {at.en ? 'month' : ruCaseMonth(26)}</>}
			{type === 'mbl' && <>18 {at.en ? 'month' : ruCaseMonth(18)}</>}
		</>
	)
}

export default TrainingPeriod
