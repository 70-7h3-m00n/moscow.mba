import { ruCase } from '@/helpers/index'
import useAt from '@/hooks/useAt'
import stls from './ProgramsQty.module.sass'

const ProgramsQty = ({ renderPrograms }) => {
	const at = useAt()
	const programsCount = renderPrograms?.length

	return (
		<div className={stls.programsQty}>
			<span>{programsCount} </span>
			<span>
				{at.en
					? 'programs'
					: ruCase(programsCount, ['программа', 'программы', 'программ'])}
			</span>
		</div>
	)
}

export default ProgramsQty
