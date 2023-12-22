import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

const stringDate = format(new Date(), 'LLLL yyyy', { locale: ru })

export const data = {
	id: 163,
	title: 'Управление современной организацией в здравоохранении',
	slug: 'upravlenie-v-gostinochnom-businesse',
	showInMenu: null,
	studyFormat: 'online',
	goal: '',
	description:
		'Вы научитесь эффективно руководить командой, строить современные стратегии развития и правильно распределять бюджет. Подойдет предпринимателям и руководителям, которые хотят получить новые компетенции и расширить карьерные возможности',
	price: 68900,
	discount: null,
	subjectsStickerType: null,
	copyToKk: null
}

export const bottomList = [
	`Актуальная программа: последнее обновление — ${stringDate}`,
	`Диплом о профпереподготовке и помощь с трудоустройством`,
	`Диплом о профпереподготовке и помощь с трудоустройством`,
	`Опытные спикеры: практикующие эксперты, преподающие в ведущих бизнес-школах`,
	'Освоите Python и его библиотеки, Jupyter Notebook, CatBoost, SQL',
	`Соберёте портфолио из 15+ проектов`
]
