import { TypeLibTeacher } from '@/types/index'
import { HTMLAttributes, MouseEventHandler } from 'react'

export type ReviewCardProps = HTMLAttributes<HTMLDivElement> & {
	close?: MouseEventHandler
	item: any
	title: string
	avatar: JSX.Element
}
