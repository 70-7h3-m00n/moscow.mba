import { DetailedHTMLProps, HTMLAttributes } from 'react'

export default interface SectionDownloadFormProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
	downloadLinks: {
		title: string
		src: string
	}[]
}
