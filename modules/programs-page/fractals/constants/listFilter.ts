import { FilterFormatTrainingEnum, FilterTypeProgramEnum } from '../enums'

export const LIST_FILTER_TYPE_PROGRAM = [
	{ value: FilterTypeProgramEnum.all, text: 'Все программы' },
	{ value: FilterTypeProgramEnum.mini, text: ' Mini MBA' },
	{ value: FilterTypeProgramEnum.mba, text: 'MBA' },
	{
		value: FilterTypeProgramEnum.profession,
		text: 'Профессии'
	},
	{ value: FilterTypeProgramEnum.course, text: 'Курсы' }
]

export const LIST_FILTER_TRAINING_PROGRAM = [
	{ value: FilterFormatTrainingEnum.online, text: 'ONLINE (дистанционно)' },
	{
		value: FilterFormatTrainingEnum.blended,
		text: ' BLENDED (с очными модулями)'
	}
]
