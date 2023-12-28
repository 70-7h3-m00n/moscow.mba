import { TypeLibPicture, TypeLibTeachers } from '@/types/index'

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
	duration?: {
		minStudyMonths: string | number | null
		studyHours?: string | number | null
		practicalLessons?: string | number | null
		workshops?: string | number | null
	} | null
	whatWillYouLearn?:
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
				skills: { title: string | null }[]
		  }[]
		| null
	specializedSubjects?:
		| {
				string: string | null
				title: string | null
				skills: { title: string | null }[]
		  }[]
		| null
	bonusSubjects?:
		| {
				string: string | null
				title: string | null
				skills: { title: string | null }[]
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
	reviews?: {
		picture: TypeLibPicture | null
		name: string | null
		desc: string | null
		story: string | null
	} | null
	whoIsFor?:
		| {
				name: string | null
				description: string | null
		  }[]
		| null
	teachers?: TypeLibTeachers | null
	prosPhoto?: string | null
	// TODO
}

export default TypeLibProgram
