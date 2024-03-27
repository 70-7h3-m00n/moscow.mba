import { menuItemType } from '../../layout/Header/widgets/HeaderMain/types'

export const menuData: menuItemType[] = [
	{
		title: 'Об академии',
		src: null,
		list: [
			{ title: 'О нас', src: '#process' },
			{ title: 'Центр карьеры', src: '#program-modules' },
			{ title: 'Отзывы', src: '#study-cost' }
		]
	},
	{
		title: 'Вебинары',
		src: null,
		list: [
			{ title: 'Как проходит обучение', src: '#process' },
			{ title: 'Программа', src: '#program-modules' },
			{ title: 'Стоимость', src: '#study-cost' },
			{ title: 'Преподаватели', src: '#experts' },
			{ title: 'Отзывы', src: '#reviews' }
		]
	},
	{
		title: 'Журнал',
		src: '#',
		list: null
	},
	{
		title: 'Контакты',
		src: '#',
		list: null
	},
	{
		title: 'Компаниям',
		src: '#',
		list: null
	},
	{
		title: 'Сведения об организации',
		src: '#',
		list: null
	}
]
