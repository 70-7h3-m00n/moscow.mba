import { getYear } from 'date-fns'

export const legalData = [
	{
		title: `© Moscow Business Academy, ${getYear(new Date())}`,
		src: '/',
		target: '_self'
	},
	{
		title: 'Карта сайта',
		src: '/sitemap',
		target: '_blank'
	},
	{
		title: 'Договор оферты',
		src: '/legaldocuments/oferta.pdf',
		target: '_blank'
	},
	{
		title: 'Политика конфиденциальности',
		src: '/legaldocuments/NDA.pdf',
		target: '_blank'
	}
]
