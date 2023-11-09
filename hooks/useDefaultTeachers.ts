import { useAt } from '@/hooks/index'
import { TypeLibTeachers } from '../types'

type useDefaultTeachersType = () => TypeLibTeachers

const useDefaultTeachers: useDefaultTeachersType = () => {
	const at = useAt()

	return [
		{
			name: at.en ? 'Itskhak Pintosevich' : 'Ицхак Пинтосевич',
			description: at.en
				? ''
				: 'Эксперт по личностному росту и развитию бизнеса, почетный профессор университета «Синергия»',
			slug: null,
			descriptionItems: null,
			programs: null,
			portrait: {
				width: null,
				height: null,
				url: '/assets/images/teachers/teacher-1.jpg',
				alt: at.en ? 'Itskhak Pintosevich' : 'Ицхак Пинтосевич'
			}
		},
		{
			name: at.en ? 'Ryakovskiy Sergey' : 'Ряковский Сергей',
			description: at.en
				? ''
				: 'Эксперт по стратегическому менеджменту. Автор многочисленных пособий по управлению персоналом',
			slug: null,
			descriptionItems: null,
			programs: null,
			portrait: {
				width: null,
				height: null,
				url: '/assets/images/teachers/teacher-2.jpg',
				alt: at.en ? 'Ryakovskiy Sergey' : 'Ряковский Сергей'
			}
		},
		{
			name: at.en ? 'Konoplyanskiy Dmitriy' : 'Коноплянский Дмитрий',
			description: at.en
				? ''
				: 'Основатель сети ювелирных салонов в Москве и регионах. Советник группы «НЛМК», «НК РОСНЕФТЬ»',
			slug: null,
			descriptionItems: null,
			programs: null,
			portrait: {
				width: null,
				height: null,
				url: '/assets/images/teachers/teacher-3.jpg',
				alt: at.en ? 'Konoplyanskiy Dmitriy' : 'Коноплянский Дмитрий'
			}
		},
		{
			name: at.en ? 'Borisov Aleksandr' : 'Борисов Александр',
			description: at.en
				? ''
				: 'Эксперт по бизнес-планированию, инвестиционному и финансовому анализу',
			slug: null,
			descriptionItems: null,
			programs: null,
			portrait: {
				width: null,
				height: null,
				url: '/assets/images/teachers/teacher-4.jpg',
				alt: at.en ? 'Borisov Aleksandr' : 'Борисов Александр'
			}
		},
		{
			name: at.en ? 'Aleksandr Doderer' : 'Александр Додерер',
			description: at.en
				? ''
				: 'Основатель и глава агентства по стратегическим коммуникациям GRUPPE DREI.',
			slug: null,
			descriptionItems: null,
			programs: null,
			portrait: {
				width: null,
				height: null,
				url: '/assets/images/teachers/teacher-5.jpg',
				alt: at.en ? 'Aleksandr Doderer' : 'Александр Додерер'
			}
		},
		{
			name: at.en ? 'Yannik Transhye' : 'Янник Траншье',
			description: at.en
				? ''
				: 'Эксперт в сфере инновационного менеджмента, технологический брокер, предприниматель',
			slug: null,
			descriptionItems: null,
			programs: null,
			portrait: {
				width: null,
				height: null,
				url: '/assets/images/teachers/teacher-6.jpg',
				alt: at.en ? 'Yannik Transhye' : 'Янник Траншье'
			}
		},
		{
			name: at.en ? 'Baranova Tatyana' : 'Баранова Татьяна',
			description: at.en
				? ''
				: 'Эксперт по деловому этикету и протоколу. «Про ЭТИКЕТ», основатель образовательного проекта',
			slug: null,
			descriptionItems: null,
			programs: null,
			portrait: {
				width: null,
				height: null,
				url: '/assets/images/teachers/teacher-7.jpg',
				alt: at.en ? 'Baranova Tatyana' : 'Баранова Татьяна'
			}
		},
		{
			name: at.en ? 'Dubovyk Serhey' : 'Дубовик Сергей',
			description: at.en
				? ''
				: 'Специалист в области продаж и управления коммерческой деятельностью.',
			slug: null,
			descriptionItems: null,
			programs: null,
			portrait: {
				width: null,
				height: null,
				url: '/assets/images/teachers/teacher-8.jpg',
				alt: at.en ? 'Dubovyk Serhey' : 'Дубовик Сергей'
			}
		}
	]
}

export default useDefaultTeachers
