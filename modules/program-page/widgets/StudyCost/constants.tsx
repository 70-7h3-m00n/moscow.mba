import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

export const dataList = {
	mbaAndMini: [
		'Спикеры — эксперты с практикой в крупных российских и зарубежных организациях',
		'70% программы — практика на основе реальных рабочих задач',
		`Последнее обновление программы — ${format(new Date(), 'LLLL yyyy', {
			locale: ru
		})}`,
		'Интерактивные онлайн-вебинары и карьерные консультации',
		'С вами на связи постоянно будут наши кураторы',
		'62% выпускников программ MBA продвинулись по карьерной лестнице',
		'Дипломы заносятся в ФРДО'
	],
	professionAndCourse: [
		'Спикеры — эксперты с практикой в крупных российских и зарубежных организациях',
		'70% программы — практика на основе реальных рабочих задач',
		`Последнее обновление программы — ${format(new Date(), 'LLLL yyyy', {
			locale: ru
		})}`,
		'Интерактивные онлайн-вебинары и карьерные консультации',
		'С вами на связи постоянно будут наши кураторы',
		'65% выпускников находят работу уже через 3 месяца'
	]
}

export const dataGrid = [
	{
		title: 'Вернем полную стоимость обучения',
		desc: 'В течение 14 дней, если вы передумали проходить обучение на программе MBA'
	},
	{
		title: 'Рассрочка 0% на весь период обучения',
		desc: 'Первый платеж через месяц'
	},
	{
		title: 'Можно вернуть 13% от полной стоимости',
		desc: 'Оформив налоговый вычет. Все подробности у менеджера при записи на обучение'
	}
]