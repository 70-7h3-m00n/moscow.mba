import stls from './ProgramsModules.module.sass'
import cn from 'classnames'

import { Wrapper } from '@/components/layout'
import { ProgramsModulesType } from './types'
import {
	RedRectangleSection,
	StickersSection,
	SubjectsSection
} from './fractals'

const ProgramsModules = ({
	program,
	smallerMb = false
}: ProgramsModulesType) => {
	return (
		<section className={cn(stls.container, { [stls.smallMb]: smallerMb })}>
			<Wrapper classNames={[stls.wrapper]}>
				<div className={stls.pl}>
					<h2>Программа обучения</h2>
					<RedRectangleSection program={program} />
				</div>
				<SubjectsSection program={program} />
				{program?.subjectsStickerType && <StickersSection program={program} />}
			</Wrapper>
		</section>
	)
}

export default ProgramsModules
