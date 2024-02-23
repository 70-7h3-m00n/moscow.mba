import { ComponentPropsWithoutRef } from 'react'
import { GroupedProgramsType } from '../ProgramsFiltersSection'

export type FilterDirectionsProps = ComponentPropsWithoutRef<'ul'> & {
	directions: GroupedProgramsType
}
