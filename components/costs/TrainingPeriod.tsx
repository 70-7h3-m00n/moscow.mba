import { ruCaseFromMonth } from '@/helpers/index'
import { useAt } from '@/hooks/index'

const TrainingPeriod = ({ period = null, type = null }) => {
	const at = useAt()

	if (period)
		return (
			<>
				От {period} {at.en ? 'month' : ruCaseFromMonth(period)}
			</>
		)
	return (
		<>
			{type === 'mini' && <>От 9 {at.en ? 'month' : ruCaseFromMonth(9)}</>}
			{type === 'mba' && <>От 18 {at.en ? 'month' : ruCaseFromMonth(18)}</>}
			{type === 'profession' && (
				<>От 4 {at.en ? 'month' : ruCaseFromMonth(4)}</>
			)}
			{type === 'course' && <>От 4 {at.en ? 'month' : ruCaseFromMonth(4)}</>}
			{type === 'executive' && (
				<>От 26 {at.en ? 'month' : ruCaseFromMonth(26)}</>
			)}
			{type === 'mbl' && <>От 18 {at.en ? 'month' : ruCaseFromMonth(18)}</>}
		</>
	)
}

export default TrainingPeriod
