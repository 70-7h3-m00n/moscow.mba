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
			descriptionItems: [
				{
					item:
						'Автор книги «Действуй! 10 заповедей успеха» и еще 14 книг-тренингов'
				},
				{
					item:
						'Общий тираж проданных книг более 800 000. Почетный профессор университета «Синергия»'
				},
				{
					item:
						'Основатель платформы для экспертов 5sfer.com и платформы для преподавателей vaikra.com'
				}
			],
			programs: null,
			portrait: {
				width: null,
				height: null,
				url:
					'https://res.cloudinary.com/npomba/image/upload/v1644251382/Iczhak_Pintosevich_47dad6b6c8.png',
				alt: at.en ? 'Itskhak Pintosevich' : 'Ицхак Пинтосевич'
			}
		},
		{
			name: at.en ? 'Ryakovskiy Sergey' : 'Ряковский Сергей',
			description: at.en
				? ''
				: 'Эксперт по стратегическому менеджменту. Автор многочисленных пособий по управлению персоналом',
			slug: null,
			descriptionItems: [
				{
					item:
						'Эксперт по стратегическому менеджменту. Автор многочисленных пособий по управлению персоналом'
				}
			],
			programs: null,
			portrait: {
				width: null,
				height: null,
				url:
					'https://res.cloudinary.com/npomba/image/upload/v1685621568/teacher_2_c5b6a1dc6a_transformed_a5bfe440bb.png',
				alt: at.en ? 'Ryakovskiy Sergey' : 'Ряковский Сергей'
			}
		},
		{
			name: at.en ? 'Konoplyanskiy Dmitriy' : 'Коноплянский Дмитрий',
			description: at.en
				? ''
				: 'Основатель сети ювелирных салонов в Москве и регионах. Советник группы «НЛМК», «НК РОСНЕФТЬ»',
			slug: null,
			descriptionItems: [
				{
					item:
						'Основатель сети ювелирных салонов в Москве и регионах. Советник группы «НЛМК», «НК РОСНЕФТЬ»'
				}
			],
			programs: null,
			portrait: {
				width: null,
				height: null,
				url:
					'https://res.cloudinary.com/npomba/image/upload/v1685621632/teacher_3_ee16f52ccb_transformed_2751d80b1e.png',
				alt: at.en ? 'Konoplyanskiy Dmitriy' : 'Коноплянский Дмитрий'
			}
		},
		{
			name: at.en ? 'Borisov Aleksandr' : 'Борисов Александр',
			description: at.en
				? ''
				: 'Эксперт по бизнес-планированию, инвестиционному и финансовому анализу',
			slug: null,
			descriptionItems: [
				{
					item:
						'Эксперт по бизнес-планированию, инвестиционному и финансовому анализу'
				}
			],
			programs: null,
			portrait: {
				width: null,
				height: null,
				url:
					'https://res.cloudinary.com/npomba/image/upload/v1685621534/teacher_4_4745638018_transformed_f42ca0412a.png',
				alt: at.en ? 'Borisov Aleksandr' : 'Борисов Александр'
			}
		},
		{
			name: at.en ? 'Aleksandr Doderer' : 'Александр Додерер',
			description: at.en
				? ''
				: 'Основатель и глава агентства по стратегическим коммуникациям GRUPPE DREI.',
			slug: null,
			descriptionItems: [
				{
					item:
						'Основатель и глава агентства по стратегическим коммуникациям GRUPPE DREI'
				}
			],
			programs: null,
			portrait: {
				width: null,
				height: null,
				url:
					'https://res.cloudinary.com/npomba/image/upload/v1631039675/teacher_5_08b0791975.jpg',
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
				url:
					'https://res.cloudinary.com/npomba/image/upload/v1644251242/Baranova_Tatyana_4248bd613f.jpg',
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
				url:
					'https://res.cloudinary.com/npomba/image/upload/v1685621604/teacher_8_0d337e4f23_transformed_702ada1041.png',
				alt: at.en ? 'Dubovyk Serhey' : 'Дубовик Сергей'
			}
		}
	]
}

export default useDefaultTeachers
