import stls from './ProgramsFiltersSection.module.sass'
import cn from 'classnames'
import { ProgramsFiltersSectionProps } from './types'
import { Wrapper } from '@/components/layout'
import { useContext } from 'react'
import { ProgramsPageContext } from 'modules/programs-page-alt/fractals/context/context'
import { TypeLibProgram, TypeLibPrograms } from '@/types/index'
import { FilterDirections } from './FilterDirections/FilterDirections'
import { FilterCategories } from './FilterCategories/FilterCategories'
import { FilterPriceAndSorting } from './FilterPriceAndSorting/FilterPriceAndSorting'
import Image from 'next/image'
import { CardsHeading } from './CardsHeading/CardsHeading'
import { Ruble } from '@/components/costs/Ruble/Ruble'

export type GroupedProgramsType = {
	[fieldName: string]: TypeLibProgram[]
}

export const ProgramsFiltersSection = ({
	className,
	...rest
}: ProgramsFiltersSectionProps) => {
	const { state, dispatch } = useContext(ProgramsPageContext)

	const groupProgramsByField = (
		programs: TypeLibPrograms
	): GroupedProgramsType => {
		const grouped = programs.reduce((acc, program) => {
			const fieldName = program?.study_field?.name

			if (fieldName) {
				if (!acc[fieldName]) {
					acc[fieldName] = []
				}
				acc[fieldName].push(program)
			}
			return acc
		}, {})

		return grouped
	}

	const bg = '/assets/images/programs/filters-bg.png'

	const uniqueDirections = groupProgramsByField(state?.programs)

	return (
		<section className={cn(className, stls.container)} {...rest}>
			<Wrapper classNames={[stls.content]}>
				<CardsHeading />
				<FilterCategories />
				<FilterDirections
					className={stls.directions}
					directions={uniqueDirections}
				/>
				<FilterPriceAndSorting />
				<Image
					className={stls.bgImage}
					src={bg}
					alt=''
					width={700}
					height={800}
					priority
				/>
			</Wrapper>
		</section>
	)
}
