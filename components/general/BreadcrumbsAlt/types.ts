import { TypeLibProgram } from '@/types/index'
import { HTMLAttributes } from 'react'

export type BreadcrumbsAltProps = HTMLAttributes<HTMLElement> & {
	programChunkData?: TypeLibProgram | {}
}
