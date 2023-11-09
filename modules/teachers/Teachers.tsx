import stls from './Teachers.module.sass'
import cn from 'classnames'
import { TeachersProps } from './types'

import { Wrapper } from '@/components/layout'
import { TeachersSearchProvider } from './fractals/context/context'
import {
	TeachersHero,
	TeachersList,
	TeachersSearchList,
	TeachersSearch
} from './widgets'

const Teachers = ({
	programTitle = null,
	programId = null,
	atStandAlonePage = false,
	teachers = null
}: TeachersProps) => {
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

export default Teachers
