import { TypeLibProgram } from '@/types/index'
import { HTMLAttributes } from 'react'

export type MBAModuleProps = HTMLAttributes<HTMLDivElement> & {
	idx?: number
	subject: TypeLibProgram['baseSubjects'][number]
}
