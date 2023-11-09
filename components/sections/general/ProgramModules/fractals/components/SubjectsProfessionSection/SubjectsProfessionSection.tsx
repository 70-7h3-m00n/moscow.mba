import stls from './SubjectsProfessionSection.module.sass'
import cn from 'classnames'
import { SubjectsProfessionSectionType } from './types'

import useAt from '@/hooks/useAt'
import { AccordionsContainer } from '@/components/general'
import { Wrapper } from '@/components/layout'
import { useState } from 'react'

export const SubjectsProfessionSection = ({
	program,
	isBonusModules
}: SubjectsProfessionSectionType) => {
	const { baseSubjects, specializedSubjects, bonusSubjects } = program

	const [closeAll, setCloseAll] = useState(false)
	const [firstCourseOnPage, setFirstCourseOnPage] = useState(0)

	const professionSubjects = [
		...baseSubjects,
		...specializedSubjects
		// {
		// 	string: 'Трудоустройство',
		// 	title: 'Трудоустройство',
		// 	skills: [
		// 		{ title: 'first' },
		// 		{ title: 'second' },
		// 		{ title: 'third' },
		// 		{ title: 'fourth' }
		// 	]
		// }
	].filter(subject => subject.string)

	return (
		<section className={cn(stls.container, 'accordionsContent')}>
			<Wrapper classNames={[stls.wrapper]}>
				<AccordionsContainer
					accordionsItems={isBonusModules ? bonusSubjects : professionSubjects}
					firstAccordionActive
					closeAll={closeAll}
					setCloseAll={setCloseAll}
					isProfessionContainer
					isBonusModules={isBonusModules}
				/>
				{!isBonusModules && (
					<div className={stls.mainInfoContainer}>
						<h3 className={stls.careerCenter}>Трудоустройство</h3>
					</div>
				)}
			</Wrapper>
		</section>
	)
}
