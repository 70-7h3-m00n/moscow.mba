import stls from './EducationROI.module.sass'
import cn from 'classnames'
import { EducationROIProps } from './types'

import { Wrapper } from '@/components/layout'
import { useEffect, useState } from 'react'
import { IconTriangle } from '@/components/icons'
import { range, dataROI } from './constants'

export const EducationROI = ({ className, ...rest }: EducationROIProps) => {
	const [inputPosition, setInputPosition] = useState<number>(range.min)
	const [bubblePosition, setBubblePosition] = useState<number>(0)

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
						И&nbsp;сколько времени потребуется, чтобы окупить вложения в курс
					</p>
				</div>
				<div className={stls.content}>
					<div className={cn(stls.content__item, stls.left)}>
						<p className={stls.left__title}>
							На позиции Junior вы заработаете столько же, сколько стоит курс
						</p>
						<p className={stls.left__description}>За 1 месяц</p>
					</div>
					<div className={cn(stls.content__item, stls.right)}>
						<div>
							<h3 className={stls.right__title}>Зарплаты BI-аналитиков</h3>
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
								{dataROI[inputPosition].salary}
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
