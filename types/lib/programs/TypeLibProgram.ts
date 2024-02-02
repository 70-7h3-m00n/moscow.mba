import { TypeLibPicture, TypeLibTeachers } from '@/types/index'
import { FutureJob } from 'modules/program-page/widgets/FutureJob/FutureJob'

type TypeLibProgram = {
	_id: string | null
	id: string | null
	title: string | null
	metaTitle: string | null
	metaDescription: string | null
	noindex: boolean | null
	nofollow: boolean | null
	slug: string | null
	studyFormat: string | null
	category: {
		type: string | null
		slug: string | null
	} | null
	isActive?: boolean | null
	study_field?: {
		name: string | null
		slug: string | null
		description: string | null
	} | null
	// TODO Этих типов нет в новых типах (в телеге)
	price?: string | number | null
	discount?: string | number | null
	hit?: boolean | null
	new?: boolean | null
	frdo?: boolean | null
	employment?: boolean | null
	futureJob: {
		id: number | null
		futureJobSalary: {
			id: number | null
			junior: number | null
			middle: number | null
			senior: number | null
		}
		job:
			| {
					id: number | null
					title: string | null
					string: string | null
			  }[]
			| null
	} | null
	duration?: {
		minStudyMonths: string | number | null
		studyHours?: string | number | null
		practicalLessons?: string | number | null
		workshops?: string | number | null
		videomaterials?: string | number | null
		modulesDescription: string | null
		modulesResult: string | null
		modulesTools:
			| {
					id: number | null
					tool: string | null
			  }[]
			| null
	} | null
	whatWillYouLearn?:
		| {
				string: string | null
		  }[]
		| null
	whatWillYouLearnNew?:
		| {
				string: string | null
		  }[]
		| null
	picture?: TypeLibPicture | null
	heroAdvantages?:
		| {
				id: number | null
				string: string | null
		  }[]
		| null
	partnership?: {
		string: string | null
		url: string | null
	} | null
	specializedSubjectsAddons?: {
		Practice: boolean | null
		OfflineModule: boolean | null
		diplomaProtection: boolean | null
	} | null
	goal?: string | null
	actualInformation: {
		paragraph: string | null
		description: string | null
		firstPhoto: string | null
		secondPhoto: string | null
	}
	description?: string | null
	baseSubjects?:
		| {
				string: string | null
				title: string | null
				new: boolean | null
				duration: number | null
				skills: {
					title: string | null
					string: string | null
					new: boolean | null
				}[]
		  }[]
		| null
	specializedSubjects?:
		| {
				string: string | null
				title: string | null
				new: boolean | null
				duration: number | null
				skills: {
					title: string | null
					string: string | null
					new: boolean | null
				}[]
		  }[]
		| null
	bonusSubjects?:
		| {
				string: string | null
				title: string | null
				new: boolean | null
				duration: number | null
				skills: {
					title: string | null
					string: string | null
					new: boolean | null
				}[]
		  }[]
		| null
	subjectsStickerType?: string | null
	programModulesCounters?: {
		leftCounter: string | null
		rightCounter: string | null
	} | null
	diplomas?: {
		diploma: TypeLibPicture | null
		name: string | null
	} | null
	questions?: {
		question: string | null
		answer: string | null
	} | null
	whoIsFor?:
		| {
				name: string | null
				description: string | null
		  }[]
		| null
	teachers?: TypeLibTeachers | null
	prosPhoto?: string | null
	reviews?:
		| {
				id: number | null
				rating: number | null
				studentName: string | null
				studentReview: string | null
				studentPhoto: string | null
				title?: string | null
		  }[]
		| null
	faq?:
		| {
				id: number | null
				title: string | null
				string: string | null
		  }[]
		| null
}

export default TypeLibProgram
