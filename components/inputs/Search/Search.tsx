import stls from './Search.module.sass'
import cn from 'classnames'
import { SearchProps } from './types'

import { IconSearch } from './assets/IconSearch/IconSearch'
import { IconCloseAlt } from '@/components/icons'

export const Search = ({
	className,
	handlerClearSearch,
	...rest
}: SearchProps) => {
	return (
		<div className={cn(className, stls.content)}>
			<IconSearch className={stls.icon} />
			<input className={stls.input} {...rest} />
			<button className={stls.clear} onClick={handlerClearSearch}>
				<IconCloseAlt className={stls.clear__icon} />
			</button>
		</div>
	)
}
