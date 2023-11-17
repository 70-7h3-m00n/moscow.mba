import { Dispatch, HTMLAttributes, SetStateAction } from 'react'
// type
export type NoResultProps = HTMLAttributes<HTMLElement> & {
	setOpen: Dispatch<SetStateAction<boolean>>
	setOpenLoader: Dispatch<SetStateAction<boolean>>
}
