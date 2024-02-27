import stls from './ModulesHeading.module.sass'
import cn from 'classnames'

import { useContext } from 'react'
import { ProgramPageContext } from 'modules/program-page/fractals/context/context'
import { TrainingPeriod } from '@/components/costs'
import { ModulesHeadingProps } from './types'
import { Tag } from 'modules/program-page/widgets/components'
import Image from 'next/image'
import { ScaleImage } from '@/components/images/program/ScaleImage/ScaleImage'
import { FolderImage } from '@/components/images/program/FolderImage/FolderImage'
import { ruCase } from '@/helpers/index'

export const ModulesHeading = ({
	className,
	program,
	...rest
}: ModulesHeadingProps) => {
	const data = [
		{
			number: (
				<TrainingPeriod
					period={program?.duration?.minStudyMonths}
					type={program?.category?.type}
					justNumbers
				/>
			),
			desc: `${ruCase(+program?.duration?.minStudyMonths, [
				'Месяц',
				'Месяца',
				'Месяцев'
			])} обучения`
		},
		{
			number: program?.duration?.videomaterials,
			desc: ruCase(+program?.duration?.videomaterials, [
				'Видеоматериал',
				'Видеоматериалa',
				'Видеоматериалов'
			])
		},
		{
			number: program?.duration?.workshops,
			desc: ruCase(+program?.duration?.videomaterials, [
				'Воркшоп',
				'Воркшопa',
				'Воркшопов'
			])
		}
	]

	const tools =
		program?.duration?.modulesTools &&
		program?.duration?.modulesTools?.length > 0

	return (
		<div className={cn(className, stls.content)} {...rest}>
			<div className={stls.left}>
				<h2 className={stls.left__title}>Программа обучения</h2>
				<p className={stls.left__desc}>
					{program?.duration?.modulesDescription}
				</p>
				<ul className={stls.left__list}>
					{data.map((item, idx) => (
						<li className={stls.left__item} key={idx}>
							<p className={stls.number}>{item.number}</p>
							<p className={stls.desc}>{item.desc}</p>
						</li>
					))}
				</ul>
			</div>

			{!program?.duration?.modulesResult ? (
				<div className={cn(stls.right, stls.images)}>
					<div className={stls.images__wrapper}>
						<ScaleImage className={stls.images__img} />
					</div>
					<div className={stls.images__wrapper}>
						<FolderImage className={stls.images__img} />
					</div>
				</div>
			) : (
				// todo dodelat
				<div
					className={cn(stls.right, {
						[stls.spaceBetween]: !tools
					})}
				>
					<p className={stls.right__title}>Результат</p>
					<p className={stls.right__desc}>{program?.duration?.modulesResult}</p>
					{tools && (
						<>
							<p className={stls.right__title}>
								Научитесь работать с&nbsp;инструментами
							</p>
							<ul className={stls.tagList}>
								{program?.duration?.modulesTools?.map(skill => (
									<Tag variant='gamma' key={skill.id}>
										{skill.tool}
									</Tag>
								))}
							</ul>
						</>
					)}
				</div>
			)}
		</div>
	)
}
