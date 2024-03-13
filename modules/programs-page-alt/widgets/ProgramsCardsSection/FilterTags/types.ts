import { ComponentPropsWithoutRef } from 'react'
import { TypeProgramsAction } from 'modules/programs-page-alt/fractals/context/reducer'

export type FilterTagsProps = ComponentPropsWithoutRef<'div'>

export type TagsType = {
	title: string
	action: TypeProgramsAction
}
