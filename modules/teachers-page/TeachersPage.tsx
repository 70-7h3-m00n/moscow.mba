import stls from './TeachersPage.module.sass'
import cn from 'classnames'
import TeachersPageProps from './props'

import { Wrapper } from '@/components/layout'
import { TeachersSearchProvider } from './fractals/context/context'
import {
	TeachersHero,
	TeachersList,
	TeachersSearchList,
	TeachersSearch
} from './widgets'

const TeachersPage = ({
	programTitle = null,
	programId = null,
	atStandAlonePage = false,
	teachers = null
}: TeachersPageProps) => {
	return (
		<TeachersSearchProvider teachersProps={teachers}>
			<section
				className={cn(stls.container, {
					[stls.standalonePage]: atStandAlonePage
				})}>
				<Wrapper column>
					<TeachersHero />
					<TeachersSearch />
					<TeachersList atStandAlonePage={atStandAlonePage} />
					<TeachersSearchList
						programTitle={programTitle}
						programId={programId}
					/>
				</Wrapper>
			</section>
		</TeachersSearchProvider>
	)
}

export default TeachersPage
