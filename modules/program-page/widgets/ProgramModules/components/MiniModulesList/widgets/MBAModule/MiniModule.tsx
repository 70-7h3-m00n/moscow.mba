import stls from './MiniModule.module.sass'
import cn from 'classnames'
import { MiniModuleProps } from './types'

import { useContext, useState } from 'react'
import { ProgramPageContext } from 'modules/program-page/fractals/context/context'
import { Accordion } from 'modules/program-page/widgets/Accordion/Accordion'
import { Tag } from 'modules/program-page/widgets/components'
import { IconLightning } from '@/components/icons'

export const MiniModule = ({
	className,
	subject,
	idx,
	...rest
}: MiniModuleProps) => {
	const { state } = useContext(ProgramPageContext)
	const { program } = state

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
