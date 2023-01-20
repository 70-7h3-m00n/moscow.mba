import { ruCaseProgram } from '@/helpers/index'
import useAt from '@/hooks/useAt'
import stls from './ProgramsQty.module.sass'

const ProgramsQty = ({ renderPrograms }) => {
	const at = useAt()
	const programsCount = renderPrograms.length

	return (
		<div className={stls.programsQty}>
			<span>{programsCount} </span>
			<span>{at.en ? 'programs' : ruCaseProgram(programsCount)}</span>
		</div>
	)
}

export default ProgramsQty
