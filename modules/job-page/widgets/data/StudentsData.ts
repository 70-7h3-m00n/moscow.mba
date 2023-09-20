export type Student = {
	name: string
	src: string
	steps: string[]
}

export const StudentsData: Student[] = [
	{
		name: 'Ирина К.',
		src: '/assets/images/job_student1.jpg',
		steps: [
			'Проектный менеджер в небольшом проекте',
			'Руководитель проекта в международном венчурном стартапе'
		]
	},
	{
		name: 'Олег З.',
		src: '/assets/images/job_student2.jpg',
		steps: [
			'Территориальный управляющий в сети магазинов',
			'Региональный представитель торгового холдинга'
		]
	},
	{
		name: 'Иван Т.',
		src: '/assets/images/job_student3.jpg',
		steps: [
			'Менеджер по продажам',
			'Руководитель отдела продаж Московского отделения рекламного холдинга'
		]
	}
]
