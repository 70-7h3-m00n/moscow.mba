import { FilterTypeProgramEnum } from '../enums'

export const LIST_FILTER_TYPE_PROGRAM = [
	{ value: FilterTypeProgramEnum.all, text: 'Все категории' },
	{ value: FilterTypeProgramEnum.mba, text: 'MBA' },
	{ value: FilterTypeProgramEnum.mini, text: ' Mini MBA' },
	{
		value: FilterTypeProgramEnum.profession,
		text: 'Профессии'
	},
	{ value: FilterTypeProgramEnum.course, text: 'Курсы' },
	{ value: FilterTypeProgramEnum.executive, text: 'Executive MBA' }
]
