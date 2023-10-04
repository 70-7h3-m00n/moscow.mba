import stls from './JobPage.module.sass'

import {
	CorporateClients,
	SectionDownloadForm,
	SectionHero
} from '@/components/sections'
import { SectionJobDescription } from './widgets/SectionJobDescription'
import { SectionJobSteps } from './widgets/SectionJobSteps'
import { SectionJobStudents } from './widgets/SectionJobStudents'
import { JobData } from './widgets/data/JobData'
import { StudentsData } from './widgets/data/StudentsData'
import { jobLinks } from './widgets/data/DownloadForm'

export default function JobPage() {
	return (
		<>
			{JobData.map((item, idx) => (
				<SectionHero key={idx} data={item} />
			))}
			<SectionJobDescription />
			<SectionJobSteps data={JobData} />
			<SectionJobStudents students={StudentsData} />
			<CorporateClients />
			<SectionDownloadForm downloadLinks={jobLinks} />
		</>
	)
}
