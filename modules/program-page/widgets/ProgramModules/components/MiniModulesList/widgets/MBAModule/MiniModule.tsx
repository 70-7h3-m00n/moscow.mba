import stls from './MiniModule.module.sass'
import cn from 'classnames'
import { MiniModuleProps } from './types'

import { useState } from 'react'
import { Accordion } from 'modules/program-page/widgets/Accordion/Accordion'

export const MiniModule = ({
	className,
	subject,
	idx,
	activeIdx,
	handler,
	...rest
}: MiniModuleProps) => {
	return (
		<div className={cn(className, stls.content)} {...rest}>
			<Accordion
				className={stls.accordion}
				key={idx}
				active={activeIdx === idx}
				item={subject}
				idx={idx}
				handler={handler}
				variant='modules'
			>
				<p className={stls.subtitle}>{subject?.string}</p>
			</Accordion>
		</div>
	)
}
