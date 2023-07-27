import stls from '@/styles/components/pages/CourseOnlineProgram.module.sass'
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
import ProgramsModules from '@/components/sections/general/ProgramsModules'
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

const CourseOnlineProgram = ({ program, teachers }) => {
	const data = program
	console.log('program: ', program)
	const router = useRouter()

	const studyFieldIsAccounting =
		program?.study_field?.slug?.trim() === 'accounting-analysis-and-audit'

	return (
		<>
			<JumbotronProgram program={data} />
			<WhatWillYouLearn data={data} />
			<ProgramDesc />
			<ProgramDevelopedStandard />
			{studyFieldIsAccounting && <SectionIPAR />}
			<WhoItIsFor program={program} />
			<Pros format={'online'} />
			<HowProcessGoes />
			<ProgramsModules program={data} smallerMb />
			<GetStudyPlan />
			<Teachers
				programId={data?._id}
				programTitle={data?.title}
				teachers={program?.teachers}
			/>
			<HelpWithEmployment />
			<CorporateClients partnershipTitle />
			<Diploma />
			<SectionStudyCost />
			<SectionCheckPros />
			<Qna programId={data?._id} programTitle={data?.title} />
			<ContactUs
				programId={data?._id}
				programTitle={data?.title}
				title={'Не знаете что выбрать?'}
				titleNewStr={'Получите консультацию по программам'}
				overlapsFooter
			/>
		</>
	)
}

export default CourseOnlineProgram
