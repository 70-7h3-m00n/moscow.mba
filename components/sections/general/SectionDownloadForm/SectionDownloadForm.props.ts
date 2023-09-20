import { DetailedHTMLProps, HTMLAttributes } from 'react'

export default interface SectionDownloadFormProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
	mail: {
		address: string
		subject: string
		body: string
	}
	downloadLinks: {
		title: string
		src: string
	}[]
}
