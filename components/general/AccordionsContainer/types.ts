import { Dispatch, HTMLAttributes, SetStateAction } from 'react'

export type AccordionsContainerProps = HTMLAttributes<HTMLDivElement> & {
	accordionsItems: any[]
	firstAccordionActive: boolean
	closeAll: boolean
	setCloseAll: Dispatch<SetStateAction<boolean>>
	isCoursesContainer?: boolean
	isModulesContainer?: boolean
	scrollableIntoView?: boolean
	isProfessionContainer?: boolean
	isBonusModules?: boolean
}
