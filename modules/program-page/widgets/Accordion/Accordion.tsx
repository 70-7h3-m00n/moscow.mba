import stls from './Accordion.module.sass'
import cn from 'classnames'
import { AccordionProps } from './types'

import { IconPlus, Tag } from '../components'
import { ruCase } from '@/helpers/index'
import { IconArrowAlt } from '../components/icons/IconArrowAlt/IconArrowAlt'
import { IconLightning } from '@/components/icons'

export const Accordion = ({
	className,
	item,
	active,
	handler,
	idx,
	variant,
	final = false,
	children
}: AccordionProps) => {
	return (
		<div className={cn(className, stls.item)} onClick={() => handler(idx)}>
			<button
				className={cn(stls.item__btn, {
					[stls.row]: final || variant === 'faq'
				})}
			>
				<div className={stls.titleWrapper}>
					{}
					<p
						className={cn(stls.item__title, {
							[stls.modulesActive]: variant === 'modules' && active
						})}
					>
						{item?.new && (
							<Tag className={stls.item__tag} variant='delta'>
								New
								<IconLightning className={stls.lightning} />
							</Tag>
						)}
						{item?.title}
					</p>
				</div>
				<div
					className={cn(stls.durationWrapper, {
						[stls.noDuration]: !item?.duration
					})}
				>
					{item?.duration && (
						<div
							className={cn(stls.duration, { [stls.duration__active]: active })}
						>
							{item?.duration}{' '}
							{ruCase(item?.duration, ['неделя', 'недели', 'недель'])}
						</div>
					)}
					{variant === 'modules' ? (
						<IconArrowAlt
							className={cn(stls.iconModules, {
								[stls.iconModules__active]: active
							})}
							status={active ? 'active' : 'default'}
						/>
					) : (
						<IconPlus
							className={cn(stls.icon, { [stls.icon__active]: active })}
							active={active}
						/>
					)}
				</div>
			</button>

			<div
				className={cn(stls.item__content, {
					[stls.active]: active
				})}
			>
				{children}
			</div>
		</div>
	)
}
