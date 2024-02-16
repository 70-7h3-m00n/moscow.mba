import stls from './Sale.module.sass'
import cn from 'classnames'
import { SaleProps } from './types'

import { PlacesLeft, Until } from '@/components/costs'
import { Tag } from 'modules/program-page/widgets/components'

export const Sale = ({ className, program, ...rest }: SaleProps) => {
	return (
		<div className={cn(className, stls.content)} {...rest}>
			<p className={stls.content__title}>
				Участвует в&nbsp;распродаже <span className='red'>-45%</span> до{' '}
				<Until />
			</p>
			<Tag className={stls.content__tag} variant='gamma'>
				{'Осталось мест:'} <PlacesLeft uniqueKey={+program?.id} />
			</Tag>
		</div>
	)
}
