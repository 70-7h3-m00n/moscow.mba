import stls from './TeachersPage.module.sass'
import cn from 'classnames'
import { TeachersPageProps } from './types'

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
		<TeachersSearchProvider
			programTitle={programTitle}
			programId={programId}
			atStandAlonePage={atStandAlonePage}
			teachersProps={teachers}
		>
			<section
				className={cn(stls.container, {
					[stls.standalonePage]: atStandAlonePage
				})}
			>
				<Wrapper column>
					<TeachersHero />
					<TeachersSearch />
					<TeachersList />
					<TeachersSearchList />
				</Wrapper>
			</section>
		</TeachersSearchProvider>
	)
}

export default TeachersPage
