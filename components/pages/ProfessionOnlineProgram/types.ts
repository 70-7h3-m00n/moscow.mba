import { TypeLibProgram, TypeLibPrograms, TypeLibTeachers } from '@/types/index'
import { HTMLAttributes } from 'react'

export type ProfessionOnlineProgramProps = HTMLAttributes<HTMLElement> & {
	program: TypeLibProgram
	programs: TypeLibPrograms
	teachers?: TypeLibTeachers
}
