import stls from './MiniModule.module.sass'
import cn from 'classnames'
import { MiniModuleProps } from './types'

import { useState } from 'react'
import { Accordion } from 'modules/program-page/widgets/Accordion/Accordion'

export const MiniModule = ({
	className,
	subject,
	idx,
	...rest
}: MiniModuleProps) => {
	const [activeIdx, setActiveIdx] = useState(0)

	return (
		<div className={cn(className, stls.content)} {...rest}>
			<Accordion
				className={stls.accordion}
				key={idx}
				active={activeIdx === idx}
				item={subject}
				idx={idx}
				handler={() => setActiveIdx(activeIdx === idx ? null : idx)}
				variant='modules'
			>
				<p className={stls.subtitle}>{subject?.string}</p>
			</Accordion>
		</div>
	)
}
