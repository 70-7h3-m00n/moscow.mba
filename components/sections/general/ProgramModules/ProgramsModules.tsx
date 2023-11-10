import stls from './ProgramsModules.module.sass'
import cn from 'classnames'
import { ProgramsModulesType } from './types'

import { Wrapper } from '@/components/layout'
import {
	RedRectangleSection,
	StickersSection,
	SubjectsSection
} from './fractals'
import useAt from '@/hooks/useAt'
import { SubjectsProfessionSection } from './fractals/components/SubjectsProfessionSection/SubjectsProfessionSection'

const ProgramsModules = ({
	program,
	smallerMb = false,
	isBonusModules = false
}: ProgramsModulesType) => {
	const at = useAt()

	return (
		<section className={cn(stls.container, { [stls.smallMb]: smallerMb })}>
			<Wrapper classNames={[stls.wrapper]}>
				{isBonusModules ? (
					<div className={stls.bonusTitle}>
						<h2 className={stls.title}>Бонусные курсы</h2>
						<p className={stls.description}>
							Помогут лучше разобраться в основах профессии. Вы можете проходить
							их параллельно с основными курсами или обращаться к ним по мере
							необходимости
						</p>
					</div>
				) : (
					<div className={stls.pl}>
						<h2>Программа обучения</h2>
						<RedRectangleSection program={program} />
					</div>
				)}
				{at.profession ? (
					<SubjectsProfessionSection
						program={program}
						isBonusModules={isBonusModules}
					/>
				) : (
					<SubjectsSection program={program} />
				)}
				{program?.subjectsStickerType && !isBonusModules && (
					<StickersSection program={program} />
				)}
			</Wrapper>
		</section>
	)
}

export default ProgramsModules
