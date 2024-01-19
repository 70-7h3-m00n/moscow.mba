import stls from './EducationROI.module.sass'
import cn from 'classnames'
import { EducationROIProps } from './types'

import { Wrapper } from '@/components/layout'
import { useContext, useEffect, useState } from 'react'
import { IconTriangle } from '@/components/icons'
import { ProgramPageContext } from 'modules/program-page/fractals/context/context'
import { toNumberWithSpaces } from '@/helpers/index'

export const EducationROI = ({ className, ...rest }: EducationROIProps) => {
	const { state } = useContext(ProgramPageContext)
	const { program } = state

	const salary = program?.futureJob?.futureJobSalary || null

	const range = {
		min: 0,
		max: 2
	}

	const [inputPosition, setInputPosition] = useState<number>(range.min)
	const [bubblePosition, setBubblePosition] = useState<number>(0)

	const dataROI = [
		{
			salary: `${toNumberWithSpaces(salary?.junior) || '50 000'}`,
			title: 'Начало работы',
			experience: 'Поступление',
			subtitle:
				'За 1-2 месяца работы на позиции начинающего специалиста сможете окупить обучение на программе',
			description: 'В начале работы'
		},
		{
			salary: `${toNumberWithSpaces(salary?.middle) || '100 000'}`,
			title: 'Middle',
			experience: 'Опыт 12 месяцев',
			subtitle:
				'В течение года продвинетесь до должности middle-специалиста с увеличением дохода вдвое',
			description: 'Middle-специалист	(опыт 1-3 года)'
		},
		{
			salary: `${toNumberWithSpaces(salary?.senior) || '160 000'}`,
			title: 'Senior',
			experience: 'Опыт 24 месяца',
			subtitle:
				'В течение двух лет сможете занять должность ведущего специалиста многократно окупив обучение',
			description: 'Senior-специалист	(опыт более 3 лет)'
		}
	]

	useEffect(() => {
		const value = Number(
			((inputPosition - range.min) * 100) / (range.max - range.min)
		)
		setBubblePosition(value)
	}, [inputPosition])

	return (
		<section className={cn(className, stls.container)} {...rest}>
			<Wrapper classNames={[stls.wrapper]}>
				<div className={stls.titleWrapper}>
					<h2 className={stls.title}>
						Как быстро окупится обучение на платформе
					</h2>
					<p className={stls.subtitle}>
						Показываем, как будет расти ваш заработок вместе с опытом.
						И&nbsp;сколько времени потребуется, чтобы окупить вложения в
						программу
					</p>
				</div>
				<div className={stls.content}>
					<div className={cn(stls.content__item, stls.left)}>
						<p className={stls.left__title}>
							{dataROI[inputPosition].subtitle}
						</p>
						<p className={stls.left__description}>
							{dataROI[inputPosition].description}
						</p>
					</div>
					<div className={cn(stls.content__item, stls.right)}>
						<div>
							<h3 className={stls.right__title}>Зарплаты</h3>
							<p className={stls.right__subtitle}>по данным HH.ru</p>
						</div>
						<div className={stls.range}>
							<input
								className={cn(stls.input, {
									[stls.junior]: inputPosition === 0,
									[stls.middle]: inputPosition === 1,
									[stls.senior]: inputPosition === 2
								})}
								type='range'
								name='volume'
								min={range.min}
								value={inputPosition}
								max={range.max}
								onChange={e => setInputPosition(+e.target.value)}
							/>

							<output
								className={stls.bubble}
								style={{
									left: `calc(${bubblePosition}% + (${
										(50 - bubblePosition) / 50
									}rem))`
								}}
							>
								{dataROI[inputPosition].salary} <span>₽</span>
								<IconTriangle className={stls.bubble__arrow} />
							</output>

							<div className={stls.rangeDescription}>
								{dataROI.map((item, idx) => (
									<div className={stls.rangeDescription__item} key={item.title}>
										<p
											className={cn(stls.rangeDescription__title, {
												[stls.active]: idx === inputPosition
											})}
										>
											{item.title}
										</p>
										<p className={stls.rangeDescription__experience}>
											{item.experience}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</Wrapper>
		</section>
	)
}
