import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type ProgramSearchItemProps = DetailedHTMLProps<
	HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
> & {
	program: any
}
