import stls from '@/styles/components/pages/BlendedProgram.module.sass'
import { NextSeo, CourseJsonLd } from 'next-seo'
import { useRouter } from 'next/router'
import truncate from 'truncate'
// import {
//   Reviews,
//   JumbotronProgram,
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
//   Accreditation,
//   Pros,
//   BlendedMetups,
//   SectionStudyCost,
// SectionCheckPros,
//   ECTSStandard,
//   GetStudyPlan
// } from '@/components/sections'
import Reviews from '@/components/sections/general/TextReviews'
import JumbotronProgram from '@/components/sections/general/JumbotronProgram/JumbotronProgram'
import ProgramGoal from '@/components/sections/general/ProgramGoal'
import WhatWillYouLearn from '@/components/sections/general/WhatWillYouLearn'
import ProgramDesc from '@/components/sections/general/ProgramDesc'
import HowProcessGoes from '@/components/sections/general/HowProcessGoes/HowProcessGoes'
import ProgramsModules from '@/components/sections/general/ProgramModules/ProgramsModules'
import ContactUs from '@/components/sections/general/ContactUs'
import Qna from '@/components/sections/general/Qna'
import Students from '@/components/sections/general/Students'
import TeachersLegacy from '@/components/sections/general/Teachers/TeachersLegacy'
import UpToDateContent from '@/components/sections/general/UpToDateContent'
import Diploma from '@/components/sections/general/Diploma/Diploma'
import CorporateClients from '@/components/sections/general/CorporateClients'
import Accreditation from '@/components/sections/general/Accreditation'
import Pros from '@/components/sections/general/Pros/Pros'
import BlendedMetups from '@/components/sections/general/BlendedMetups'
import SectionStudyCost from '@/components/sections/general/SectionStudyCost/SectionStudyCost'
import SectionCheckPros from '@/components/sections/general/SectionCheckPros'
import ECTSStandard from '@/components/sections/general/ECTSStandard'
import GetStudyPlan from '@/components/sections/general/GetStudyPlan/GetStudyPlan'
import { VideoReviews } from '../sections'

const PageBlendedProgram = ({ program, programs = null, teachers }) => {
	const router = useRouter()

	return (
		<>
			<JumbotronProgram program={program} programs={programs} />
			<ProgramGoal data={program} />
			<WhatWillYouLearn data={program} />
			<ProgramDesc />
			<BlendedMetups />
			<Pros program={program} format={'blended'} />
			<HowProcessGoes />
			<ProgramsModules program={program} />
			{/* <ECTSStandard /> */}
			<GetStudyPlan />
			<TeachersLegacy
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

export default PageBlendedProgram
