import { ComponentPropsWithoutRef, Dispatch, SetStateAction } from 'react'

export type NoResultProps = ComponentPropsWithoutRef<'div'> & {
	setOpen: Dispatch<SetStateAction<boolean>>
	setOpenLoader: Dispatch<SetStateAction<boolean>>
}
