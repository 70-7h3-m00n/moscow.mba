import stls from './FRDO.module.sass'
import cn from 'classnames'
import { IconInfoFRDO } from '@/components/icons'

const dataFRDO = [
	'Ликвидация оборота поддельных документов государственного образца об образовании',
	'Гарантия достоверности информации о соискателях для работодателей',
	'Сокращение числа нарушений и коррупции в образовательных учреждениях',
	'Повышение качества образования за счет доступности информации о выпускниках'
]

export const FRDO = () => {
	return (
		<div className={stls.content}>
			<div className={stls.topWrapper}>
				<IconInfoFRDO className={stls.icon} color='#fff' />
				<p>
					<span className={stls.bold}>ФРДО —</span> Федеральный реестр сведений
					документов об образовании
				</p>
			</div>
			<p className={cn(stls.bold, stls.listTitle)}>
				Цели Федерального реестра:
			</p>
			<ul className={stls.list}>
				{dataFRDO.map(item => (
					<li className={stls.item} key={item}>
						<p>{item}</p>
					</li>
				))}
			</ul>
		</div>
	)
}
