import stls from '@/styles/components/pages/ProfessionOnlineProgram.module.sass'
import { NextSeo, CourseJsonLd } from 'next-seo'
import { useRouter } from 'next/router'
import truncate from 'truncate'
// import {
//   JumbotronProgram,
//   WhoItIsFor,
//   WhatWillYouLearn,
//   ProgramDesc,
//   HowProcessGoes,
//   ProgramsModules,
//   ContactUs,
//   Qna,
//   Teachers,
//   Diploma,
//   CorporateClients,
//   SectionStudyCost,
// SectionCheckPros,
//   HelpWithEmployment,
//   Pros,
//   GetStudyPlan,
//   ProgramDevelopedStandard
// } from '@/components/sections'
import JumbotronProgram from '@/components/sections/general/JumbotronProgram'
import WhoItIsFor from '@/components/sections/general/WhoItIsFor'
import WhatWillYouLearn from '@/components/sections/general/WhatWillYouLearn'
import ProgramDesc from '@/components/sections/general/ProgramDesc'
import HowProcessGoes from '@/components/sections/general/HowProcessGoes'
import ProgramsModules from '@/components/sections/general/ProgramModules/ProgramsModules'
import ContactUs from '@/components/sections/general/ContactUs'
import Qna from '@/components/sections/general/Qna'
import Teachers from '@/components/sections/general/Teachers'
import Diploma from '@/components/sections/general/Diploma'
import CorporateClients from '@/components/sections/general/CorporateClients'
import SectionStudyCost from '@/components/sections/general/SectionStudyCost'
import SectionCheckPros from '@/components/sections/general/SectionCheckPros'
import HelpWithEmployment from '@/components/sections/general/HelpWithEmployment'
import Pros from '@/components/sections/general/Pros'
import GetStudyPlan from '@/components/sections/general/GetStudyPlan'
import ProgramDevelopedStandard from '@/components/sections/general/ProgramDevelopedStandard'
import SectionIPAR from '@/components/sections/general/SectionIPAR'
import {
	Accreditation,
	ProgramActuality,
	ProgramGoal,
	RecommendedPrograms,
	Students
} from '../sections'
import TextReviews from '../sections/general/TextReviews'

const ProfessionOnlineProgram = ({ program, programs, teachers }) => {
	const data = program
	const studyFieldIsAccounting =
		program?.study_field?.slug?.trim() === 'accounting-analysis-and-audit'

	return (
		<>
			<JumbotronProgram program={data} />
			{data?.goal && <ProgramGoal data={program} />}
			{program?.actualInformation && <ProgramActuality data={program} />}
			<WhatWillYouLearn data={data} />
			<ProgramDesc data={data} />
			<WhoItIsFor program={program} />
			<ProgramDevelopedStandard />
			{studyFieldIsAccounting && <SectionIPAR />}
			<Pros format={'online'} />
			<HowProcessGoes />
			<ProgramsModules program={data} smallerMb />
			<HelpWithEmployment />
			{/* add bonus modules */}
			<GetStudyPlan />
			<Diploma />
			<Teachers
				programId={data?._id}
				programTitle={data?.title}
				teachers={program?.teachers}
			/>
			<Students />
			<TextReviews />
			<Accreditation />
			<CorporateClients partnershipTitle />
			<SectionStudyCost />
			<SectionCheckPros />
			<Qna programId={data?._id} programTitle={data?.title} />
			<ContactUs
				programId={data?._id}
				programTitle={data?.title}
				title={'Не знаете что выбрать?'}
				titleNewStr={'Получите консультацию по программам'}
			/>
			<RecommendedPrograms programs={programs} />
		</>
	)
}

export default ProfessionOnlineProgram
