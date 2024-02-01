import { TypeLibProgram } from '@/types/index'
import { HTMLAttributes } from 'react'

export type MiniModuleProps = HTMLAttributes<HTMLDivElement> & {
	idx?: number
	subject?: TypeLibProgram['baseSubjects'][number]
	handler?: () => void
	activeIdx: number
}
