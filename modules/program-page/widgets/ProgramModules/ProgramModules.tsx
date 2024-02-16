import stls from './ProgramModules.module.sass'
import cn from 'classnames'
import { ProgramModulesProps } from './types'

import { Wrapper } from '@/components/layout'
import { MBAModulesList } from './components/MBAModulesList/MBAModulesList'
import useAt from '@/hooks/useAt'
import { FinalProject } from './components/FinalProject/FinalProject'
import { EmploymentModule } from './components/EmploymentModule/EmploymentModule'
import { BonusModule } from './components/BonusModule/BonusModule'
import { GetFullProgramBtn } from './components/GetFullProgramBtn/GetFullProgramBtn'
import { MiniModulesList } from './components/MiniModulesList/MiniModulesList'
import { ModulesHeading } from './components/ModulesHeading/ModulesHeading'
import { CourseModules } from './components/CourseModules/CourseModules'

export const ProgramModules = ({
	className,
	program,
	...rest
}: ProgramModulesProps) => {
	const at = useAt()

	return (
		<section className={cn(className, stls.container)} {...rest}>
			<Wrapper classNames={[stls.content]}>
				<ModulesHeading program={program} />
				{(at.mini || at.mba) && (
					<>
						<MBAModulesList
							className={stls.modulesList}
							baseSubjects
							program={program}
						/>
						<MBAModulesList
							className={stls.modulesList}
							specializedSubjects
							program={program}
						/>
						<FinalProject />
						<EmploymentModule />
						<BonusModule />
						<MBAModulesList
							className={stls.modulesList}
							bonusSubjects
							program={program}
						/>
						<GetFullProgramBtn program={program} />
					</>
				)}
				{at.profession && (
					<>
						<MiniModulesList
							className={stls.modulesList}
							baseSubjects
							program={program}
						/>
						<FinalProject />
						<EmploymentModule />
						<BonusModule />
						<MiniModulesList
							className={stls.modulesList}
							bonusSubjects
							program={program}
						/>
						<GetFullProgramBtn program={program} />
					</>
				)}
				{at.course && (
					<>
						<CourseModules className={stls.modulesList} program={program} />
						<GetFullProgramBtn program={program} />
					</>
				)}
			</Wrapper>
		</section>
	)
}
