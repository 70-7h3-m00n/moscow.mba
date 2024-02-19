import stls from './MiniModulesList.module.sass'
import cn from 'classnames'
import { MiniModulesListProps } from './types'

import { MiniModule } from './widgets/MBAModule/MiniModule'
import { useState } from 'react'
import { Tag } from 'modules/program-page/widgets/components'

export const MiniModulesList = ({
	className,
	baseSubjects = false,
	bonusSubjects = false,
	program,
	...rest
}: MiniModulesListProps) => {
	const [activeIdx, setActiveIdx] = useState(0)

	const subjects = baseSubjects
		? program?.baseSubjects
		: bonusSubjects
		? program?.bonusSubjects
		: null

	return (
		<>
			{!!subjects?.length && subjects?.length > 0 && (
				<>
					{baseSubjects && (
						<Tag className={stls.tag} variant='eta'>
							Универсальные знания
						</Tag>
					)}
					{bonusSubjects && (
						<Tag className={stls.tag} variant='eta'>
							Бонусные модули
						</Tag>
					)}
					<div className={cn(className, stls.content)} {...rest}>
						{subjects?.map((subject, idx) => (
							<MiniModule
								className={stls.module}
								subject={subject}
								key={`${subject?.title}-${subject?.duration}`}
								idx={idx}
								handler={() => setActiveIdx(activeIdx === idx ? null : idx)}
								activeIdx={activeIdx}
							/>
						))}
					</div>
				</>
			)}
		</>
	)
}
