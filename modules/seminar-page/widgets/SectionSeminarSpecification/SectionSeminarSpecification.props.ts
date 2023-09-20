import { TypeLibSeminar } from '@/types/index'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

export default interface SectionSeminarSpecificationProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
	seminar: TypeLibSeminar
}
