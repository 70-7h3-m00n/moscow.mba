import stls from './PriceTag.module.sass'
import cn from 'classnames'
import { PriceTagProps } from './types'

import { Tag } from 'modules/program-page/widgets'
import { Loan, Price } from '@/components/costs'
import useAt from '@/hooks/useAt'

export const PriceTag = ({
	className,
	dark = false,
	program,
	...rest
}: PriceTagProps) => {
	const at = useAt()

	const type = program.category.slug

	const variant = dark ? 'epsilon' : 'theta'

	return (
		<div
			className={cn(className, stls.price, { [stls.darkBg]: dark })}
			{...rest}
		>
			{type === 'mba' || type === 'mini' ? (
				<>
					<Tag className={cn(stls.priceTag, stls.reverse)} variant={variant}>
						<Price
							discount
							type={program?.category.type}
							format={program?.studyFormat}
							programPrice={program?.price}
							renderedByComponent='CardProgram'
						/>
					</Tag>
					<p className={stls.price__description}>
						{'Рассрочка от '}
						<Loan
							discount
							type={program?.category.type}
							format={program?.studyFormat}
							programPrice={(at.profession || at.course) && +program?.price}
							variant='programsPage'
						/>
					</p>
				</>
			) : (
				<>
					<Tag className={stls.priceTag} variant={variant}>
						от&nbsp;
						<Loan
							discount
							type={program?.category.type}
							format={program?.studyFormat}
							programPrice={(at.profession || at.course) && +program?.price}
							variant='programsPage'
						/>
					</Tag>
					<p className={stls.price__description}>
						{'или сразу '}

						<Price
							discount={false}
							type={program?.category.type}
							format={program?.studyFormat}
							programPrice={program?.price}
							renderedByComponent='CardProgram'
						/>
					</p>
				</>
			)}
		</div>
	)
}
