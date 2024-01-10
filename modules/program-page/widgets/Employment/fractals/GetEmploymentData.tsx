import stls from '../Employment.module.sass'

import Image from 'next/image'
import useAt from '@/hooks/useAt'
import { GridIcons } from '../../components/GridIcons/GridIcons'
import { EmploymenIcons } from '../../components/EmploymenIcons/EmploymenIcons'

export const GetEmploymentData = () => {
	const at = useAt()

	return [
		{
			title: at.profession || at.course ? 'Резюме' : 'Оформите резюме',
			desc:
				at.profession || at.course
					? 'Научим вас оформлять резюме и выгодно рассказывать о себе'
					: 'Научим выгодно презентовать свои сильные стороны и грамотно составлять резюме',
			background: (
				<Image
					className={stls.item__background}
					src={'/assets/images/program/employment-bg-1.png'}
					alt='Оформите резюме'
					width={650}
					height={500}
				/>
			)
		},
		{
			title: 'Конкурентное портфолио',
			desc: 'Поможем оформить кейсы в презентабельное портфолио и подскажем площадки для публикаций',
			background: <GridIcons className={stls.gridIcons} variant='beta' />
		},
		{
			title:
				at.profession || at.course
					? 'Поиск вакансий'
					: 'Прохождение собеседований',
			desc:
				at.profession || at.course
					? 'Расскажем, как ориентироваться на рынке труда и выбрать перспективного работодателя'
					: 'Расскажем, как успешно подготовиться к собеседованию в компаниях-партнерах',
			background: <EmploymenIcons />
		},
		{
			title:
				at.profession || at.course
					? 'Собеседование'
					: 'Научитесь работать на себя',
			desc:
				at.profession || at.course
					? 'Дадим вам навыки самопрезентации и подскажем лайфхаки для успешного прохождения собеседований'
					: 'Подскажем, где искать клиентов, как построить коммуникацию с заказчиком и обезопасить сделку',
			background: (
				<Image
					className={stls.item__background}
					src={'/assets/images/program/employment-bg-2.svg'}
					alt='Оформите резюме'
					width={882}
					height={579}
				/>
			)
		}
	]
}
