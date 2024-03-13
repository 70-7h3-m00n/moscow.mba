import routesFront from '@/config/routesFront'
import { FilterPricingProgramEnum, FilterTypeProgramEnum } from '../enums'

export const LIST_FILTER_TYPE_PROGRAM = [
	{
		value: FilterTypeProgramEnum.all,
		text: 'Все категории',
		description: null,
		src: `${routesFront.root}${routesFront.programs}`
	},
	{
		value: FilterTypeProgramEnum.mba,
		text: 'MBA',
		description:
			'MBA (Master of Business Administration) — это квалификационная степень в менеджменте, которую получают в бизнес-школах. Программы обучения MBA подходят руководителям и менеджерам, которым необходимо развить управленческий навык',
		src: `${routesFront.root}${routesFront.programsMba}`
	},
	{
		value: FilterTypeProgramEnum.mini,
		text: ' Mini MBA',
		description:
			'Программы Mini MBA подойдут руководителям и менеджерам среднего звена. Обучение в Mini MBA проходит в ускоренном темпе и помогает актуализировать знания в сжатые сроки',
		src: `${routesFront.root}${routesFront.programsMini}`
	},
	{
		value: FilterTypeProgramEnum.profession,
		text: 'Профессии',
		description: null,
		src: `${routesFront.root}${routesFront.programsProfession}`
	},
	{
		value: FilterTypeProgramEnum.course,
		text: 'Курсы',
		description: null,
		src: `${routesFront.root}${routesFront.programsCourse}`
	},
	{
		value: FilterTypeProgramEnum.executive,
		text: 'Executive MBA',
		description: null,
		src: `${routesFront.root}${routesFront.programsExecutive}`
	}
]

export const LIST_FILTER_PRICE_PROGRAM = [
	{
		value: FilterPricingProgramEnum.free,
		text: 'Бесплатно'
	},
	{
		value: FilterPricingProgramEnum.paid,
		text: 'Платно'
	}
]
