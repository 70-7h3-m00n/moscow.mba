import { DetailedHTMLProps, HTMLAttributes } from 'react'

type Review = {
	review: string
	src: string
}

export default interface SectionPartnersReviewsProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
	data: Review[]
}
