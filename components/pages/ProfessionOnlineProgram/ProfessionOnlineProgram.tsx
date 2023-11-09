import stls from './ProfessionOnlineProgram.module.sass'
import { ProfessionOnlineProgramProps } from './types'

import { NextSeo, CourseJsonLd } from 'next-seo'
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
import JumbotronProgram from '@/components/sections/general/JumbotronProgram/JumbotronProgram'
import WhoItIsFor from '@/components/sections/general/WhoItIsFor'
import WhatWillYouLearn from '@/components/sections/general/WhatWillYouLearn'
import ProgramDesc from '@/components/sections/general/ProgramDesc'
import HowProcessGoes from '@/components/sections/general/HowProcessGoes/HowProcessGoes'
import ProgramsModules from '@/components/sections/general/ProgramModules/ProgramsModules'
import ContactUs from '@/components/sections/general/ContactUs'
import Qna from '@/components/sections/general/Qna'
import Diploma from '@/components/sections/general/Diploma/Diploma'
import CorporateClients from '@/components/sections/general/CorporateClients'
import SectionStudyCost from '@/components/sections/general/SectionStudyCost/SectionStudyCost'
import SectionCheckPros from '@/components/sections/general/SectionCheckPros'
import HelpWithEmployment from '@/components/sections/general/HelpWithEmployment'
import Pros from '@/components/sections/general/Pros/Pros'
import GetStudyPlan from '@/components/sections/general/GetStudyPlan/GetStudyPlan'
import ProgramDevelopedStandard from '@/components/sections/general/ProgramDevelopedStandard/ProgramDevelopedStandard'
import SectionIPAR from '@/components/sections/general/SectionIPAR'
import {
	AboutSection,
	Accreditation,
	DiplomaProjectSection,
	ForeignAffiliates,
	ProgramActuality,
	ProgramActualityProfession,
	ProgramGoal,
	RecommendedPrograms,
	Students,
	VideoReviews,
	WhereStudentsWorks
} from '../../sections'
import TextReviews from '../../sections/general/TextReviews'
import { CareerCenterSection } from '../../sections'
import { Marquee } from '../../general'
import { Teachers } from 'modules'

const ProfessionOnlineProgram = ({
	program,
	programs
}: ProfessionOnlineProgramProps) => {
	const studyFieldIsAccounting =
		program?.study_field?.slug?.trim() === 'accounting-analysis-and-audit'

	return (
		<>
			<JumbotronProgram program={program} />
			{program?.goal && (
				<ProgramGoal className={stls.programGoal} data={program} />
			)}
			{program?.actualInformation && program?.actualInformation?.paragraph && (
				<ProgramActualityProfession
					className={stls.programActualityProfession}
					program={program}
				/>
			)}
			<WhatWillYouLearn data={program} />
			<ProgramDesc data={program} />
			<WhoItIsFor
				className={stls.whoItIsFor}
				program={program}
				withBigNumbers={false}
			/>
			<ProgramDevelopedStandard className={stls.programDevelopedStandard} />
			{studyFieldIsAccounting && <SectionIPAR />}
			<Pros className={stls.pros} program={program} format={'online'} />
			<CareerCenterSection className={stls.careerCenterSection} />
			<HowProcessGoes className={stls.howProcessGoes} />
			<ProgramsModules program={program} />
			<DiplomaProjectSection className={stls.diplomaProjectSection} />
			{program?.bonusSubjects?.length > 0 && (
				<ProgramsModules program={program} isBonusModules />
			)}
			<GetStudyPlan className={stls.getStudyPlan} lightTheme />
			<Teachers
				programId={program?._id}
				programTitle={program?.title}
				teachers={program?.teachers}
			/>
			<Students />
			<TextReviews />
			<VideoReviews darkBackground />
			<AboutSection />
			<ForeignAffiliates className={stls.foreignAffiliates} />
			<Marquee className={stls.marquee} />
			<Accreditation />
			<HelpWithEmployment />
			<WhereStudentsWorks />
			<Diploma />
			<SectionStudyCost />
			<SectionCheckPros />
			<Qna
				programId={program?._id}
				programTitle={program?.title}
				firstAccordionActive
			/>
			<ContactUs
				programId={program?._id}
				programTitle={program?.title}
				title={'Не знаете что выбрать?'}
				titleNewStr={'Получите консультацию по программам'}
			/>
			<RecommendedPrograms programs={programs} />
		</>
	)
}

export default ProfessionOnlineProgram
