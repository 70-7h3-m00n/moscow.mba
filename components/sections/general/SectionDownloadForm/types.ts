import { HTMLAttributes } from 'react'

export type SectionDownloadFormProps = HTMLAttributes<HTMLElement> & {
	downloadLinks: {
		title: string
		src: string
	}[]
}
