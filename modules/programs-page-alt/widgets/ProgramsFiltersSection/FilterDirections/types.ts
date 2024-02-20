import { ComponentPropsWithoutRef } from 'react'

export type FilterDirectionsProps = ComponentPropsWithoutRef<'ul'> & {
	uniqueDirections: string[]
}
