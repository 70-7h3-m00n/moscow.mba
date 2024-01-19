import stls from './MBAModulesList.module.sass'
import cn from 'classnames'
import { MBAModulesListProps } from './types'

import useAt from '@/hooks/useAt'
import { MBAModule } from './widgets/MBAModule/MBAModule'
import { useContext, useState } from 'react'
import { ProgramPageContext } from 'modules/program-page/fractals/context/context'
import { Tag } from 'modules/program-page/widgets/components'

export const MBAModulesList = ({
	className,
	baseSubjects = false,
	specializedSubjects = false,
	bonusSubjects = false,
	...rest
}: MBAModulesListProps) => {
	const at = useAt()
	const { state } = useContext(ProgramPageContext)
	const { program } = state

	const subjects = baseSubjects
		? program?.baseSubjects
		: specializedSubjects
		? program?.specializedSubjects
		: bonusSubjects
		? program?.bonusSubjects
		: null

	return (
		<>
			{baseSubjects && (
				<Tag className={stls.tag} variant='eta'>
					Базовые дисциплины
				</Tag>
			)}
			{specializedSubjects && (
				<Tag className={stls.tag} variant='eta'>
					Специализированные дисциплины
				</Tag>
			)}
			<div className={cn(className, stls.content)} {...rest}>
				{at.mba &&
					subjects?.map(subject => (
						<MBAModule
							className={stls.module}
							subject={subject}
							key={subject?.title}
						/>
					))}
			</div>
		</>
	)
}