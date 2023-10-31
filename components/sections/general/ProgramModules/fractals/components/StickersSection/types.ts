import { TypeLibProgram } from '@/types/index'
import { HTMLAttributes } from 'react'

export type StickersSectionType = HTMLAttributes<HTMLDivElement> & {
	program: TypeLibProgram
}
