import stls from '@/styles/components/layout/Wrapper.module.sass'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { ComponentPropsWithoutRef, ReactNode } from 'react'

const Wrapper = ({
	children,
	classNames = [],
	row = true,
	column = false,
	...rest
}: ComponentPropsWithoutRef<'div'> & {
	children: ReactNode
	classNames?: any
	row?: boolean
	column?: boolean
}) => {
	let container
	// TODO: there should be no props such as row or column, only children and classNames. Where it's necessary to have horizontal layout inside wrapper, we could add a className in place. Default behavior should be column.
	if (classNames.length !== 0) {
		container = getClassNames({ classNames })
	} else if (column) {
		container = stls.column
	} else if (row) {
		container = stls.row
	}
	return (
		<div className={cn(stls.page, container)} {...rest}>
			{children}
		</div>
	)
}

export default Wrapper
