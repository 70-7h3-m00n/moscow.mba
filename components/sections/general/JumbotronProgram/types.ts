import { TypeLibProgram, TypeLibPrograms } from '@/types/index'
import { HTMLAttributes } from 'react'

export type JumbotronProgramProps = HTMLAttributes<HTMLElement> & {
	program: TypeLibProgram
	programs?: TypeLibPrograms
}
