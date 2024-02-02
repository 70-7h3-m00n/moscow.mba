import { routesFront } from '@/config/index'

export const navList = [
	{
		title: 'Направления',
		list: [
			{
				item: 'MBA',
				src: `${routesFront.programs}/mba/online`
			},
			{
				item: 'Mini MBA',
				src: `${routesFront.programs}/mini/online`
			},
			{
				item: 'Executive MBA',
				src: `${routesFront.programs}/executive`
			},
			{
				item: 'Профессии',
				src: `${routesFront.programs}/profession/online`
			},
			{
				item: 'Курсы',
				src: `${routesFront.programs}/course/online`
			}
		]
	},
	{
		title: 'Академия',
		list: [
			{
				item: 'О нас',
				src: routesFront.about
			},
			// {
			// 	item: 'Центр карьеры',
			// 	src: routesFront.job
			// },
			{
				item: 'Отзывы',
				src: routesFront.reviews
			},
			{
				item: 'Эксперты',
				src: routesFront.teachers
			},
			{
				item: 'Контакты',
				src: routesFront.contact
			},
			// {
			// 	item: 'Вакансии',
			// 	// TODO
			// 	src: '/'
			// },
			// {
			// 	item: 'Оплата',
			// 	src: routesFront.payment
			// },
			{
				item: 'Сведения об организации',
				src: routesFront.about
			}
		]
	},
	{
		title: 'Проекты',
		list: [
			{
				item: 'Семинары',
				src: routesFront.seminars
			},
			// {
			// 	item: 'Бесплатные курсы',
			// 	//TODO
			// 	src: routesFront.programs
			// },
			{
				item: 'Журнал',
				src: routesFront.journal
			}
		]
	},
	{
		title: 'Сотрудничество',
		list: [
			{
				item: 'Корпоративным клиентам',
				src: routesFront.partner
			}
		]
	}
]
