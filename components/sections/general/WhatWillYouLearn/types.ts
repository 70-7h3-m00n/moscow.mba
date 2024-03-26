import { TypeLibProgram } from '@/types/index'
import { HTMLAttributes } from 'react'

export type WhatWillYouLearnProps = HTMLAttributes<HTMLDivElement> & {
	program?: TypeLibProgram
}
