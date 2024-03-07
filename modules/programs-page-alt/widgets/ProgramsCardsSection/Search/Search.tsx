import stls from './Search.module.sass'
import cn from 'classnames'
import { SearchProps } from './types'

import { IconSearch } from './assets/IconSearch/IconSearch'
import { IconCloseAlt } from '@/components/icons'

export const Search = ({ className, ...rest }: SearchProps) => {
	return (
		<div className={cn(className, stls.content)} {...rest}>
			<IconSearch className={stls.icon} />
			<input
				className={stls.input}
				type='text'
				placeholder='Какую программу вы ищете'
			/>
			<IconCloseAlt className={stls.clear} />
		</div>
	)
}
