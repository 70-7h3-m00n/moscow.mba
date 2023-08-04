import stls from '@/styles/components/pages/OnlineProgram.module.sass'
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
import JumbotronProgram from '@/components/sections/general/JumbotronProgram'
import Reviews from '@/components/sections/general/Reviews'
import ProgramGoal from '@/components/sections/general/ProgramGoal'
import WhatWillYouLearn from '@/components/sections/general/WhatWillYouLearn'
import ProgramDesc from '@/components/sections/general/ProgramDesc'
import HowProcessGoes from '@/components/sections/general/HowProcessGoes'
import ProgramsModules from '@/components/sections/general/ProgramsModules'
import GetStudyPlan from '@/components/sections/general/GetStudyPlan'
import ContactUs from '@/components/sections/general/ContactUs'
import Qna from '@/components/sections/general/Qna'
import Students from '@/components/sections/general/Students'
import Teachers from '@/components/sections/general/Teachers'
import UpToDateContent from '@/components/sections/general/UpToDateContent'
import Diploma from '@/components/sections/general/Diploma'
import CorporateClients from '@/components/sections/general/CorporateClients'
import SectionStudyCost from '@/components/sections/general/SectionStudyCost'
import SectionCheckPros from '@/components/sections/general/SectionCheckPros'
import Accreditation from '@/components/sections/general/Accreditation'
import Pros from '@/components/sections/general/Pros'
import React from 'react'
import { DigitalTransformationContext } from '@/context/index'
import {
	ProgramActuality,
	ProgramDevelopedStandard,
	RecommendedPrograms,
	WhoItIsFor
} from '../sections'

const journalReadAlsoArticles = {
	title: ' ЧИТАЙТЕ ТАКЖЕ',
	articles: [
		{
			title: 'Как выстроить эффективный отдел интернет-маркетинга?',
			slug: 'kak-vystroit-effektivnyj-otdel-internet-marketinga',
			createdAt: null,
			picture: {
				url: 'https://res.cloudinary.com/npomba/image/upload/v1665939422/Otdel_internet_marketinga_f90b3dbb25.png',
				width: 3840,
				height: 2160,
				alt: null
			}
		},
		{
			title: 'KPI маркетолога — как внедрить и использовать в своих интересах ',
			slug: 'kpi-marketologa-kak-vnedrit-i-ispolzovat-v-svoih-interesah',
			createdAt: null,
			picture: {
				url: 'https://res.cloudinary.com/npomba/image/upload/v1665930548/KPI_marketologa_bb548c5853.png',
				width: 3840,
				height: 2160,
				alt: null
			}
		},
		{
			title: 'Директор по маркетингу. Плюсы и минусы профессии',
			slug: 'direktor-po-marketingu-plyusy-i-minusy-professii',
			createdAt: null,
			picture: {
				url: 'https://res.cloudinary.com/npomba/image/upload/v1671015529/imgonline_com_ua_Compress_By_Size_j_AZFH_Vh_Ql_YU_a60240fe32.jpg',
				width: 3840,
				height: 2160,
				alt: null
			}
		},
		{
			title: 'Директор по маркетингу - как им стать?',
			slug: 'direktor-po-marketingu-kak-im-stat',
			createdAt: null,
			picture: {
				url: 'https://res.cloudinary.com/npomba/image/upload/v1673265944/imgonline_com_ua_Compress_By_Size_5r_L_Qx_C_Dz_Alj_M_Rm_3af1e224a2.jpg',
				width: 3840,
				height: 2160,
				alt: null
			}
		}
	]
}

const PageOnlineProgram = ({ program, programs, teachers }) => {
	const router = useRouter()

	// TODO: Test, TemporarySolution: Текстовый шаблон страницы курсов MINI MBA
	const isDigitalTransformation =
		program?.category?.slug === 'mini' &&
		program?.studyFormat === 'online' &&
		program?.slug === 'digital-transformation'

	const setIsdigitalTransformation = () => {
		if (isDigitalTransformation) return true

		return false
	}

	return (
		<>
			{/* TODO: Test, TemporarySolution: Текстовый шаблон страницы курсов MINI MBA */}
			<DigitalTransformationContext.Provider
				value={setIsdigitalTransformation()}>
				<JumbotronProgram program={program} programs={programs} />
				<ProgramGoal data={program} />
				{isDigitalTransformation && <ProgramActuality data={program} />}
				<WhatWillYouLearn data={program} />
				{isDigitalTransformation ? (
					<>
						<WhoItIsFor program={program} />
						<ProgramDevelopedStandard />
					</>
				) : (
					<ProgramDesc />
				)}
				<Pros format={'online'} />
				<HowProcessGoes />
				<ProgramsModules program={program} />
				{/* <ECTSStandard /> */}
				<GetStudyPlan />
				<Teachers
					programId={program?._id}
					programTitle={program?.title}
					teachers={teachers}
				/>
				{isDigitalTransformation ? (
					<>
						<Students />
						<Reviews />
						<Accreditation />
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
						<Reviews />
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
					// overlapsFooter
				/>
				{isDigitalTransformation && <RecommendedPrograms programs={programs} />}
			</DigitalTransformationContext.Provider>
		</>
	)
}

export default PageOnlineProgram
