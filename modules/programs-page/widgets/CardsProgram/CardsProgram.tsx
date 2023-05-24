import { usePrograms } from 'modules/programs-page/fractals'
import { CardProgram } from './fractals'

const CardsProgram = () => {
	const { renderPrograms } = usePrograms()

	const programs = [...renderPrograms].filter(
		program => program?.slug !== 'executive'
	)

	return (
		<>
			{programs?.map((program, idx) => {
				return (
					<CardProgram key={program?._id || program?.id} program={program} />
				)
			})}
		</>
	)
}

export default CardsProgram
