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

export const ProgramModules = ({ className, ...rest }: ProgramModulesProps) => {
	const at = useAt()

	return (
		<section className={cn(className, stls.container)} {...rest}>
			<Wrapper classNames={[stls.content]}>
				<ModulesHeading />
				{at.mba && (
					<>
						<MBAModulesList className={stls.modulesList} baseSubjects />
						<MBAModulesList className={stls.modulesList} specializedSubjects />
						<FinalProject />
						<EmploymentModule />
						<BonusModule />
						<MBAModulesList className={stls.modulesList} bonusSubjects />
						<GetFullProgramBtn />
					</>
				)}
				{(at.mini || at.profession) && (
					<>
						<MiniModulesList className={stls.modulesList} baseSubjects />
						<FinalProject />
						<EmploymentModule />
						<BonusModule />
						<MiniModulesList className={stls.modulesList} bonusSubjects />
						<GetFullProgramBtn />
					</>
				)}
			</Wrapper>
		</section>
	)
}
