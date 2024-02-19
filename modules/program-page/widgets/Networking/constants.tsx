import stls from './Networking.module.sass'

import { NetworkingDiagram } from '@/components/images/program/NetworkingDiagram/NetworkingDiagram'
import Image from 'next/image'

export const data = [
	{
		title: 'Единомышленники, близкие вам по уровню',
		desc:
			'На дистанционных программах MBA обучаются корпоративные менеджеры и предприниматели из разных сфер',
		image: (
			<Image
				src='/assets/images/program/networking-item-1.jpg'
				width={82}
				height={82}
				alt='Фото клиента'
			/>
		)
	},
	{
		title: 'Знакомство с бизнес-сообществом',
		desc:
			'На программах MBA обучаются ведущие менеджеры топовых компаний, таких как Роснефть, Сбербанк, Россети, Р/Д, Hh.ru, Татэнерго, ТОМС, ЛУКОМ-А',
		image: (
			<Image
				src='/assets/images/program/networking-item-2.svg'
				width={82}
				height={82}
				alt='Знакомство с бизнес-сообществом'
			/>
		)
	},
	{
		title:
			'Очные мероприятия с приглашенными экспертами и представителями бизнес-комьюнити',
		desc:
			'Moscow Business Academy проводит стратегические онлайн-сессии с представителями бизнес-сообщества в Москва-Сити оффлайн',
		image: (
			<Image
				src='/assets/images/program/networking-item-3.svg'
				width={82}
				height={82}
				alt='Очные мероприятия'
			/>
		)
	},
	{
		title: 'На нашей программе обучаются',
		desc: (
			<ul>
				<li>Руководители среднего звена</li>
				<li>Руководители подразделений</li>
				<li>Руководители проектов</li>
				<li>Руководители малых и средних компаний</li>
			</ul>
		),
		bigImage: (
			// <Image
			// 	src='/assets/images/program/networking-item-4.png'
			// 	width={308}
			// 	height={308}
			// 	alt='На нашей программе обучаются'
			// />
			<NetworkingDiagram className={stls.diagram} />
		)
	}
]
