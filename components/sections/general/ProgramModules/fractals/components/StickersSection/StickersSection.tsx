import stls from './StickersSection.module.sass'
import { StickersSectionType } from './types'

import { Sticker, Stickers } from '@/components/general'

export const StickersSection = ({
	className,
	program
}: StickersSectionType) => {
	return (
		<div className={stls.sticker}>
			{program?.subjectsStickerType === 'finalAttestation' ? (
				<Sticker
					type={'long'}
					clr={'light'}
					title={'Итоговая аттестация'}
					listItems={[
						'Бизнес-проектирование (подготовка итоговой аттестационной работы, консультирование по бизнес-проектированию)',
						'Защита итоговой аттестационной работы'
					]}
				/>
			) : program?.subjectsStickerType === 'fullTimeModuleInMoscow' ? (
				<Sticker
					type={'long'}
					clr={'light'}
					title={'Очный модуль в Москве'}
					listItems={[
						'Живое общение со спикерами',
						'Групповые проекты и разбор кейсов',
						'Домашние задания и курсовая работа',
						'Защита проектов и выпускной вечер'
					]}
				/>
			) : program?.subjectsStickerType ===
			  'practiceModulesAndFinalAttestation' ? (
				<Stickers>
					<Sticker
						type={'short'}
						clr={'light'}
						title={'Практические модули'}
						listItems={[
							'Работа над собственными проектами: практика групповых взаимодействий, кейс-методы, эссе'
						]}
					/>
					<Sticker
						type={'short'}
						clr={'light'}
						title={'Итоговая аттестация'}
						listItems={[
							'Бизнес-проектирование (подготовка итоговой аттестационной работы, консультирование по бизнес-проектированию)',
							'Защита итоговой аттестационной работы'
						]}
					/>
				</Stickers>
			) : (
				<></>
			)}
		</div>
	)
}
