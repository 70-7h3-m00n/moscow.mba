import stls from '@/styles/components/pages/InternationalBusinessLaw.module.sass'
import { NextSeo, CourseJsonLd } from 'next-seo'
import { useRouter } from 'next/router'
import truncate from 'truncate'
// import {
//   JumbotronProgram,
//   Reviews,
//   ProgramGoal,
//   WhatWillYouLearn,
//   ProgramDesc,
//   HowProcessGoes,
//   ProgramsModules,
//   ContactUs,
//   Qna,
//   Students,
//   Teachers,
//   UpToDateContent,
//   Diploma,
//   CorporateClients,
//   SectionStudyCost,
// SectionCheckPros,
//   Accreditation,
//   Pros,
//   GetStudyPlan
// } from '@/components/sections'
import JumbotronProgram from '@/components/sections/general/JumbotronProgram/JumbotronProgram'
import Reviews from '@/components/sections/general/TextReviews'
import ProgramGoal from '@/components/sections/general/ProgramGoal'
import WhatWillYouLearn from '@/components/sections/general/WhatWillYouLearn'
import ProgramDesc from '@/components/sections/general/ProgramDesc'
import HowProcessGoes from '@/components/sections/general/HowProcessGoes/HowProcessGoes'
import ProgramsModules from '@/components/sections/general/ProgramModules/ProgramsModules'
import ContactUs from '@/components/sections/general/ContactUs'
import Qna from '@/components/sections/general/Qna'
import Students from '@/components/sections/general/Students'
import Teachers from '@/components/sections/general/Teachers/TeachersLegacy'
import UpToDateContent from '@/components/sections/general/UpToDateContent'
import Diploma from '@/components/sections/general/Diploma/Diploma'
import CorporateClients from '@/components/sections/general/CorporateClients'
import SectionStudyCost from '@/components/sections/general/SectionStudyCost/SectionStudyCost'
import SectionCheckPros from '@/components/sections/general/SectionCheckPros'
import Accreditation from '@/components/sections/general/Accreditation'
import Pros from '@/components/sections/general/Pros/Pros'
import GetStudyPlan from '@/components/sections/general/GetStudyPlan/GetStudyPlan'

const PageOnlineProgram = ({ program, teachers }) => {
	const router = useRouter()

	return (
		<>
			<JumbotronProgram program={program} />
			<ProgramGoal data={program} />
			<WhatWillYouLearn data={program} />
			<ProgramDesc />
			<Pros program={program} format={'online'} />
			<HowProcessGoes />
			<ProgramsModules program={program} />
			<GetStudyPlan />
			<Teachers
				programId={program?._id}
				programTitle={program?.title}
				teachers={teachers}
			/>
			<UpToDateContent withBottomLine />
			<CorporateClients />
			<Accreditation />
			<Diploma />
			<Students />
			<Reviews />
			<SectionStudyCost />
			<SectionCheckPros />
			<Qna programId={program?._id} programTitle={program?.title} />
			<ContactUs
				programId={program?._id}
				programTitle={program?.title}
				title={'Не знаете что выбрать?'}
				titleNewStr={'Получите консультацию по программам MBA'}
				overlapsFooter
			/>
		</>
	)
}

export default PageOnlineProgram
