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
import useAt from '@/hooks/useAt'

const profIndDocuments = [
	{
		path: academyDiplomaProfInd,
		name: 'Диплом академии',
		nameEn: 'Diploma of the academy',
		fillWidth: 783,
		fullHeight: 1110,
		smallWidth: 362,
		smallHeight: 257
	},
	{
		path: qualificationDiplomaProfInd,
		name: 'Диплом уст. образца',
		nameEn: 'Diploma of the established form',
		fillWidth: 783,
		fullHeight: 1110,
		smallWidth: 362,
		smallHeight: 257
	},
	{
		path: diplomaAddendumProfInd,
		name: 'Приложение к диплому',
		nameEn: 'Diploma supplement',
		fillWidth: 783,
		fullHeight: 1110,
		smallWidth: 362,
		smallHeight: 257
	},
	{
		path: diplomaSupplementProfInd,
		name: 'Диплом Supplement',
		nameEn: 'International Diploma Supplement',
		fillWidth: 795,
		fullHeight: 1125
	}
]

const miniDocuments = [
	{
		path: academyDiplomaMini,
		name: 'Диплом академии',
		nameEn: 'Diploma of the academy',
		fillWidth: 783,
		fullHeight: 1110,
		smallWidth: 362,
		smallHeight: 257
	},
	{
		path: qualificationDiplomaMini,
		name: 'Диплом уст. образца',
		nameEn: 'Diploma of the established form',
		fillWidth: 783,
		fullHeight: 1110,
		smallWidth: 362,
		smallHeight: 257
	},
	{
		path: diplomaAddendumMini,
		name: 'Приложение к диплому',
		nameEn: 'Diploma supplement',
		fillWidth: 783,
		fullHeight: 1110,
		smallWidth: 362,
		smallHeight: 257
	},
	{
		path: diplomaSupplementMini,
		name: 'Диплом Supplement',
		nameEn: 'International Diploma Supplement',
		fillWidth: 795,
		fullHeight: 1125
	}
]

const professionDocuments = [
	{
		path: certificateProfession,
		name: 'Сертификат академии',
		nameEn: 'Certificate of the academy',
		fillWidth: 783,
		fullHeight: 1110,
		smallWidth: 362,
		smallHeight: 257
	},
	{
		path: qualificationDiplomaProfession,
		name: 'Диплом уст. образца',
		nameEn: 'Diploma of the established form',
		fillWidth: 783,
		fullHeight: 1110,
		smallWidth: 362,
		smallHeight: 257
	},
	{
		path: diplomaAddendumProfession,
		name: 'Приложение к диплому',
		nameEn: 'Diploma supplement',
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
		nameEn: 'Certificate of the academy',
		fillWidth: 783,
		fullHeight: 1110,
		smallWidth: 362,
		smallHeight: 257
	},
	{
		path: qualificationCertificateCourses,
		name: 'Удостоверение уст. образца',
		nameEn: 'Certificate of the established form',
		fillWidth: 783,
		fullHeight: 1110,
		smallWidth: 362,
		smallHeight: 257
	}
]

const documentsBasedOnProgram = [
	{
		title: 'MBA',
		titleEn: 'MBA',
		content: profIndDocuments,
		isImage: true
	},
	{
		title: 'MBA Mini',
		titleEn: 'MBA Mini',
		content: miniDocuments,
		isImage: true
	},
	{
		title: 'Профессия',
		titleEn: 'Profession',
		content: professionDocuments,
		isImage: true
	},
	{
		title: 'Курс',
		titleEn: 'Course',
		content: coursesDocuments,
		isImage: true
	}
]

const getEnglishDocuments = (
	docs: typeof documentsBasedOnProgram
): typeof documentsBasedOnProgram => {
	return docs.map(item => ({
		...item,
		title: item.titleEn,
		content: item.content.map(docs => ({ ...docs, name: docs.nameEn }))
	}))
}

const OurDiplomasAndCertificates = () => {
	const at = useAt()

	return (
		<section>
			<Wrapper classNames={[stls.wrapper]}>
				<div className={cn(stls.content, { [stls.borderBottom]: !at.en })}>
					<h2 className={stls.subHeading}>
						{at.en
							? 'Diplomas and certificates'
							: 'Выдаваемые дипломы и сертификаты'}
					</h2>
					<p className={stls.desc}>
						{at.en
							? 'We provide training on the basis of the state license №041221. After graduation from Moscow Business Academy you will receive a professional retraining diploma of the established sample, a diploma of the Academy in English and an international Diploma Supplement, which can be added to your portfolio and shown to your employer.'
							: 'Мы производим обучение на основании государственной лицензии №041221. После окончания обучения в Moscow Business Academy Вы получите диплом о профессиональной переподготовке установленного образца, диплом академии и международный диплом Supplement, которые можно добавить в портфолио и показать работодателю.'}
					</p>
					<AccordionsContainer
						accordionsItems={
							at.en
								? getEnglishDocuments(documentsBasedOnProgram)
								: documentsBasedOnProgram
						}
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
