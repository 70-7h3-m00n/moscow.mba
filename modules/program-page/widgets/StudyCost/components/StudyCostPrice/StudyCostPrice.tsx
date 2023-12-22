import stls from './StudyCostPrice.module.sass'
import cn from 'classnames'
import { StudyCostPriceProps } from './types'
import { Tag } from 'modules/program-page/widgets/components'

const data = [
	'Спикеры — эксперты с практикой в крупных российских и зарубежных организациях',
	'70% программы — практика на основе реальных рабочих задач',
	'Последнее обновление программы — июнь 2023',
	'Интерактивные онлайн-вебинары и карьерные консультации',
	'С вами на связи постоянно будут наши кураторы',
	'62% выпускников программ MBA продвинулись по карьерной лестнице',
	'Дипломы заносятся в ФРДО'
]

const dataGrid = [
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

export const StudyCostPrice = ({ className }: StudyCostPriceProps) => {
	return (
		<div className={cn(className, stls.content)}>
			<h2 className={stls.title}>Стоимость обучения</h2>
			<div className={stls.details}>
				<Tag variant='gamma'>Осталось мест: 24</Tag>
				<p>Старт курса: 12 мая</p>
			</div>
			<div className={stls.priceWrapper}>
				<p>6 320 ₽ / мес</p>
			</div>
			<ul className={stls.list}>
				{data.map((item, idx) => (
					<li className={stls.list__item} key={idx}>
						{item}
					</li>
				))}
			</ul>
			<ul className={stls.grid}>
				{dataGrid.map((item, idx) => (
					<li className={stls.gridItem} key={idx}>
						<h3 className={stls.gridItem__title}>{item.title}</h3>
						<p className={stls.gridItem__desc}>{item.desc}</p>
					</li>
				))}
			</ul>
		</div>
	)
}
