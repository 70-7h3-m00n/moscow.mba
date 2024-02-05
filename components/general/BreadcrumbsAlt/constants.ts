export const professionRoute = {
	label: {
		ru: 'Профессии',
		'en-US': 'Profession'
	},
	path: '/programs/profession/online'
}

export const courseRoute = {
	label: {
		ru: 'Курсы',
		'en-US': 'Course'
	},
	path: '/programs/course/online'
}

export const mainRoutes = [
	{
		label: {
			ru: 'Главная',
			'en-US': 'Home'
		},
		path: '/'
	},
	{
		label: {
			ru: 'Программы',
			'en-US': 'Programs'
		},
		path: '/programs'
	},
	{
		label: {
			ru: 'Об академии',
			'en-US': 'About'
		},
		path: '/about'
	},
	{
		label: {
			ru: 'Эксперты',
			'en-US': 'Experts'
		},
		path: '/teachers'
	},
	{
		label: {
			ru: 'Вебинары',
			'en-US': 'Webinars'
		},
		path: '/webinars'
	},
	{
		label: {
			ru: 'Семинары',
			'en-US': 'Seminars'
		},
		path: '/seminars'
	},
	{
		label: {
			ru: 'Ближайшие вебинары',
			'en-US': 'Upcoming webinars'
		},
		path: '/webinars/upcoming'
	},
	{
		label: {
			ru: 'Прошедшие вебинары',
			'en-US': 'Archived webinars'
		},
		path: '/webinars/archive'
	},
	{
		label: {
			ru: 'Контакты',
			'en-US': 'Contact'
		},
		path: '/contact'
	},
	{
		label: {
			ru: 'Сведения об организации',
			'en-US': 'Legal'
		},
		path: '/legal'
	},
	{
		label: {
			ru: 'Оплата',
			'en-US': 'Payment'
		},
		path: '/payment'
	},
	{
		label: {
			ru: 'Журнал',
			'en-US': 'Journal'
		},
		path: '/journal'
	},
	{
		label: {
			ru: 'Отзывы студентов',
			'en-US': 'Reviews'
		},
		path: '/reviews'
	}
]

export const homeRoute = mainRoutes.find(route => route.path === '/')
