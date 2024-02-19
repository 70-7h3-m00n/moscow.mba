import stls from './CourseModules.module.sass'
import cn from 'classnames'
import { CourseModulesProps } from './types'

import { Tag } from 'modules/program-page/widgets/components'

export const CourseModules = ({
	className,
	program,
	...rest
}: CourseModulesProps) => {
	const studyModule = program?.baseSubjects?.[0] || null

	return (
		<>
			{studyModule && (
				<>
					<Tag className={stls.tag} variant='eta'>
						Универсальные знания
					</Tag>

					<div className={cn(className, stls.content)} {...rest}>
						<p className={stls.title}>
							Стратегическое управление и развитие строительного бизнеса
						</p>
						<p className={stls.description}>
							Подберёте оптимальную структуру управления командой. Научитесь
							анализировать и улучшать показатели отдела. Построите воронки
							продаж, сформируете KPI и систему мотивации сотрудников.
						</p>
						<ul className={stls.skills}>
							{studyModule?.skills.map(el => (
								<li className={stls.skills__item} key={el.title}>
									{el.title}
								</li>
							))}
						</ul>
					</div>
				</>
			)}
		</>
	)
}
