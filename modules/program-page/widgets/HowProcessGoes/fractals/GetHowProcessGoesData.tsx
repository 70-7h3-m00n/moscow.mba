import useAt from '@/hooks/useAt'

export const GetHowProcessGoesData = () => {
	const at = useAt()

	const program = at.mba
		? 'MBA'
		: at.mini
		? 'Mini MBA'
		: at.profession
		? 'профессиональной переподготовки'
		: at.course
		? 'курсов'
		: ''

	return [
		{
			title: 'Поступление',
			subtitle: 'Поступление',
			description: `Вы заключаете договор, производите оплату ${
				at.course ? 'выбранного курса' : 'выбранной программы ' + program
			} и получаете доступ к личному кабинету на образовательной платформе`,
			background: '/assets/images/program/slider-bg.png'
		},
		{
			title: 'Регистрация',
			subtitle: 'Доступ к платформе',
			description:
				'Образовательная платформа — собственная разработка компании, которую мы постоянно улучшаем. Вам будут доступны расписание, видео, общение с кураторами и форма для отправки домашнего задания',
			background: '/assets/images/program/slider-bg.png'
		},
		{
			title: 'Теория',
			subtitle: 'Получайте знания',
			description: `Программы ${program} состоят из тематических видео разной длительности и общих эфиров с экспертами. Смотрите их когда и где угодно. Закрепите полученные знания на специальных кейсах, тренажерах и тестированиях`,
			background: '/assets/images/program/slider-bg.png'
		},
		{
			title: 'Практика',
			subtitle: 'Выполняйте задания',
			description:
				'Вы сможете отточить полученные навыки на групповых проектах и практических заданиях, приближенных к формату реальных задач. Мы ежегодно обновляем учебные планы, чтобы вы получали навыки, которые нужны работодателям',
			background: '/assets/images/program/slider-bg.png'
		},
		{
			title: 'Обратная связь',
			subtitle: 'Обратная связь от преподавателей',
			description:
				'Преподаватели будут проверять ваши домашние работы, давать обратную связь, советы и рекомендации по проектам. В конце каждого модуля проводятся вебинары, где разбираются итоги и вопросы студентов',
			background: '/assets/images/program/slider-bg.png'
		},
		{
			title: 'Поддержка',
			subtitle: 'Поддержка от кураторов',
			description:
				'С вами на связи постоянно будут кураторы. Они помогут адаптироваться к учебному процессу и проработать ошибки в трудных заданиях. Общаться с проверяющими кураторами можно на самой платформе',
			background: '/assets/images/program/slider-bg.png'
		}
	]
}
