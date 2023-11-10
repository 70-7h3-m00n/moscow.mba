import stls from '@/styles/components/sections/OurDiplomasAndCertificates.module.sass'
import cn from 'classnames'
import { AccordionsContainer } from '@/components/general'
import academyDiplomaProfInd from '@/public/assets/diplomas/profind/diploma-profind.jpg'
import qualificationDiplomaProfInd from '@/public/assets/diplomas/profind/qualification-diploma-profind.jpg'
import diplomaAddendumProfInd from '@/public/assets/diplomas/profind/diploma-addendum-profind.jpg'
import diplomaSupplementProfInd from '@/public/assets/diplomas/profind/diploma-supplement-profind.jpg'

import academyDiplomaMini from '@/public/assets/diplomas/mini/diploma-mini.jpg'
import qualificationDiplomaMini from '@/public/assets/diplomas/mini/qualification-diploma-mini.jpg'
import diplomaAddendumMini from '@/public/assets/diplomas/mini/diploma-addendum-mini.jpg'
import diplomaSupplementMini from '@/public/assets/diplomas/mini/diploma-supplement-mini.jpg'

import certificateProfession from '@/public/assets/diplomas/profession/certificate-profession.png'
import qualificationDiplomaProfession from '@/public/assets/diplomas/profession/qualification-diploma-profession.jpg'
import diplomaAddendumProfession from '@/public/assets/diplomas/profession/diploma-addendum-profession.jpg'

import certificateCourses from '@/public/assets/diplomas/courses/certificate-courses.jpg'
import qualificationCertificateCourses from '@/public/assets/diplomas/courses/qualification-certificate-courses.jpg'
import { Wrapper } from '@/components/layout'

const profIndDocuments = [
	{
		path: academyDiplomaProfInd,
		name: 'Диплом академии',
		fillWidth: 783,
		fullHeight: 1110,
		smallWidth: 362,
		smallHeight: 257
	},
	{
		path: qualificationDiplomaProfInd,
		name: 'Диплом уст. образца',
		fillWidth: 783,
		fullHeight: 1110,
		smallWidth: 362,
		smallHeight: 257
	},
	{
		path: diplomaAddendumProfInd,
		name: 'Приложение к диплому',
		fillWidth: 783,
		fullHeight: 1110,
		smallWidth: 362,
		smallHeight: 257
	},
	{
		path: diplomaSupplementProfInd,
		name: 'Диплом Supplement',
		fillWidth: 795,
		fullHeight: 1125
	}
]

const miniDocuments = [
	{
		path: academyDiplomaMini,
		name: 'Диплом академии',
		fillWidth: 783,
		fullHeight: 1110,
		smallWidth: 362,
		smallHeight: 257
	},
	{
		path: qualificationDiplomaMini,
		name: 'Диплом уст. образца',
		fillWidth: 783,
		fullHeight: 1110,
		smallWidth: 362,
		smallHeight: 257
	},
	{
		path: diplomaAddendumMini,
		name: 'Приложение к диплому',
		fillWidth: 783,
		fullHeight: 1110,
		smallWidth: 362,
		smallHeight: 257
	},
	{
		path: diplomaSupplementMini,
		name: 'Диплом Supplement',
		fillWidth: 795,
		fullHeight: 1125
	}
]

const professionDocuments = [
	{
		path: certificateProfession,
		name: 'Сертификат академии',
		fillWidth: 783,
		fullHeight: 1110,
		smallWidth: 362,
		smallHeight: 257
	},
	{
		path: qualificationDiplomaProfession,
		name: 'Диплом уст. образца',
		fillWidth: 783,
		fullHeight: 1110,
		smallWidth: 362,
		smallHeight: 257
	},
	{
		path: diplomaAddendumProfession,
		name: 'Приложение к диплому',
		fillWidth: 783,
		fullHeight: 1110,
		smallWidth: 362,
		smallHeight: 257
	}
]

const coursesDocuments = [
	{
		path: certificateCourses,
		name: 'Сертификат академии',
		fillWidth: 783,
		fullHeight: 1110,
		smallWidth: 362,
		smallHeight: 257
	},
	{
		path: qualificationCertificateCourses,
		name: 'Удостоверение уст. образца',
		fillWidth: 783,
		fullHeight: 1110,
		smallWidth: 362,
		smallHeight: 257
	}
]

const documentsBasedOnProgram = [
	{
		title: 'MBA',
		content: profIndDocuments,
		isImage: true
	},
	{
		title: 'MBA Mini',
		content: miniDocuments,
		isImage: true
	},
	{
		title: 'Профессия',
		content: professionDocuments,
		isImage: true
	},
	{
		title: 'Курс',
		content: coursesDocuments,
		isImage: true
	}
]

const OurDiplomasAndCertificates = () => {
	return (
		<section>
			<Wrapper classNames={[stls.wrapper]}>
				<div className={stls.content}>
					<h2 className={stls.subHeading}>Выдаваемые дипломы и сертификаты</h2>
					<p className={stls.desc}>
						Мы производим обучение на основании государственной лицензии
						№041221. После окончания обучения в Moscow Business Academy Вы
						получите диплом о профессиональной переподготовке установленного
						образца, диплом академии и международный диплом Supplement, которые
						можно добавить в портфолио и показать работодателю.
					</p>
					<AccordionsContainer
						accordionsItems={documentsBasedOnProgram}
						firstAccordionActive={true}
						closeAll={false}
						setCloseAll={() => {}}
						scrollableIntoView={true}
					/>
				</div>
			</Wrapper>
		</section>
	)
}

export default OurDiplomasAndCertificates
