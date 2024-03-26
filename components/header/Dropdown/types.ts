import { menuItemType } from '@/components/layout/Header/widgets/HeaderMain/types'
import { ComponentPropsWithoutRef } from 'react'

export type DropdownProps = ComponentPropsWithoutRef<'div'> & {
	menuItem: menuItemType
}
