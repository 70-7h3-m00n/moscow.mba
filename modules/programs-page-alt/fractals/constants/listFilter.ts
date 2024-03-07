import routesFront from '@/config/routesFront'
import { FilterPricingProgramEnum, FilterTypeProgramEnum } from '../enums'

export const LIST_FILTER_TYPE_PROGRAM = [
	{
		value: FilterTypeProgramEnum.all,
		text: 'Все категории',
		description: 'test',
		src: `${routesFront.root}${routesFront.programs}`
	},
	{
		value: FilterTypeProgramEnum.mba,
		text: 'MBA',
		description: 'test',
		src: `${routesFront.root}${routesFront.programsMba}`
	},
	{
		value: FilterTypeProgramEnum.mini,
		text: ' Mini MBA',
		description: 'test',
		src: `${routesFront.root}${routesFront.programsMini}`
	},
	{
		value: FilterTypeProgramEnum.profession,
		text: 'Профессии',
		description: 'test',
		src: `${routesFront.root}${routesFront.programsProfession}`
	},
	{
		value: FilterTypeProgramEnum.course,
		text: 'Курсы',
		description: 'test',
		src: `${routesFront.root}${routesFront.programsCourse}`
	},
	{
		value: FilterTypeProgramEnum.executive,
		text: 'Executive MBA',
		description: 'test',
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
