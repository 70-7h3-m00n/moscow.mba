import stls from './ProgramsFiltersSection.module.sass'
import cn from 'classnames'
import { ProgramsFiltersSectionProps } from './types'
import { Wrapper } from '@/components/layout'
import { useContext } from 'react'
import { ProgramsPageContext } from 'modules/programs-page-alt/fractals/context/context'
import { TypeLibPrograms } from '@/types/index'

export const ProgramsFiltersSection = ({
	className,
	...rest
}: ProgramsFiltersSectionProps) => {
	// const { uniqueDirections, minMaxDuration } = usePrograms()
	// console.log('>>>> uniqueDirections <<<<  ', uniqueDirections)

	const { state, dispatch } = useContext(ProgramsPageContext)

	const filterUniqueDirections = (programs: TypeLibPrograms) => {
		const programsStudyFieldName = programs.map(
			program => program?.study_field?.name
		)
		const uniqueProgramsStudyFieldName = programsStudyFieldName.filter(
			(item, index, arr) => arr.indexOf(item) === index
		)

		return uniqueProgramsStudyFieldName
	}

	const uniqueDirections = filterUniqueDirections(state?.programs)

	return (
		<section className={cn(className, stls.container)} {...rest}>
			<Wrapper classNames={[stls.content]}>
				<h1 className={stls.title}>Все программы обучения</h1>
				{/* categories */}
				<ul>
					{uniqueDirections?.map(direction => (
						<li key={direction}>{direction}</li>
					))}
				</ul>
			</Wrapper>
		</section>
	)
}
