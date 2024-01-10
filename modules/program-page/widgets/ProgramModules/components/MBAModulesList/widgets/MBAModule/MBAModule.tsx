import stls from './MBAModule.module.sass'
import cn from 'classnames'
import { MBAModuleProps } from './types'

import { useState } from 'react'
import { Accordion } from 'modules/program-page/widgets/Accordion/Accordion'
import { IconLightning } from '@/components/icons'

export const MBAModule = ({
	className,
	subject,
	idx,
	...rest
}: MBAModuleProps) => {
	const [activeIdx, setActiveIdx] = useState(0)

	return (
		<div className={cn(className, stls.content)} {...rest}>
			<Accordion
				className={stls.accordion}
				key={idx}
				active={activeIdx === idx}
				item={subject}
				idx={activeIdx}
				handler={() => setActiveIdx(activeIdx === idx ? null : idx)}
				variant='modules'
			>
				<p className={stls.subtitle}>{subject?.string}</p>
				<ul className={stls.list}>
					{subject?.skills?.length > 0 &&
						subject?.skills?.map(item => (
							<li className={stls.item} key={item?.title}>
								<div className={stls.item__titleWrapper}>
									<p className={stls.item__title}>{item?.title}</p>
									{item?.new && (
										<span className={stls.new}>
											New <IconLightning className={stls.lightning} />
										</span>
									)}
								</div>
								<p className={stls.item__description}>{item?.string}</p>
							</li>
						))}
				</ul>
			</Accordion>
		</div>
	)
}
