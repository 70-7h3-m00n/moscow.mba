import stls from './OnlineProgram.module.sass'
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
//   GetStudyPlan,
//   ContactUs,
//   Qna,
//   Students,
//   Teachers,
//   UpToDateContent,
//   Diploma,
//   CorporateClients,
//   Accreditation,
//   Pros,
//   SectionStudyCost,
// SectionCheckPros,
//   ECTSStandard
// } from '@/components/sections'
import JumbotronProgram from '@/components/sections/general/JumbotronProgram/JumbotronProgram'
import TextReviews from '@/components/sections/general/TextReviews'
import ProgramGoal from '@/components/sections/general/ProgramGoal'
import WhatWillYouLearn from '@/components/sections/general/WhatWillYouLearn'
import ProgramDesc from '@/components/sections/general/ProgramDesc'
import HowProcessGoes from '@/components/sections/general/HowProcessGoes/HowProcessGoes'
import ProgramsModules from '@/components/sections/general/ProgramModules/ProgramsModules'
import GetStudyPlan from '@/components/sections/general/GetStudyPlan/GetStudyPlan'
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
import React from 'react'
import { DigitalTransformationContext } from '@/context/index'
import {
	HelpWithEmployment,
	ProgramActuality,
	ProgramDevelopedStandard,
	ProgramsModulesAccordion,
	RecommendedPrograms,
	VideoReviews,
	WhoItIsFor
} from '../../sections'

const PageOnlineProgram = ({ program, programs, teachers }) => {
	const router = useRouter()

	// TODO: Test, TemporarySolution: Текстовый шаблон страницы курсов MINI MBA
	// const isDigitalTransformation = null

	const isDigitalTransformation =
		program?.category?.slug === 'mini' &&
		program?.studyFormat === 'online' &&
		program?.slug === 'digital-transformation'

	const isMiniMBAProgram = program?.category?.slug === 'mini'

	const setIsdigitalTransformation = () => {
		if (isDigitalTransformation) return true

		return false
	}

	return (
		<>
			{/* TODO: Test, TemporarySolution: Текстовый шаблон страницы курсов MINI MBA */}
			<DigitalTransformationContext.Provider
				value={setIsdigitalTransformation()}
			>
				<JumbotronProgram program={program} programs={programs} />
				<ProgramGoal data={program} />
				{program?.actualInformation?.paragraph && (
					<ProgramActuality data={program} />
				)}
				<WhatWillYouLearn data={program} />
				{program?.whoIsFor?.length > 0 ? (
					<>
						<WhoItIsFor program={program} />
						<ProgramDevelopedStandard />
					</>
				) : (
					<ProgramDesc />
				)}
				<Pros program={program} format={'online'} />
				<HowProcessGoes />
				{isMiniMBAProgram ? (
					<ProgramsModulesAccordion program={program} />
				) : (
					<ProgramsModules program={program} />
				)}
				{/* <ECTSStandard /> */}
				<GetStudyPlan />
				<Teachers
					programId={program?._id}
					programTitle={program?.title}
					teachers={teachers}
				/>
				{isMiniMBAProgram ? (
					<>
						<Students />
						<TextReviews />
						<VideoReviews darkBackground />
						<Accreditation />
						<HelpWithEmployment />
						<CorporateClients />
						<Diploma />
					</>
				) : (
					<>
						<UpToDateContent withBottomLine />
						<CorporateClients />
						<Accreditation />
						<Diploma />
						<Students />
						<TextReviews />
					</>
				)}
				<SectionStudyCost />
				<SectionCheckPros />
				<Qna programId={program?._id} programTitle={program?.title} />
				<ContactUs
					programId={program?._id}
					programTitle={program?.title}
					title={''}
					titleNewStr={'Получите консультацию по программам MBA'}
				/>
				{isMiniMBAProgram && <RecommendedPrograms programs={programs} />}
			</DigitalTransformationContext.Provider>
		</>
	)
}

export default PageOnlineProgram
