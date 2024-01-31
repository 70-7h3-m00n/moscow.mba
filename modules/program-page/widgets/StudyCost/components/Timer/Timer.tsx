import stls from './Timer.module.sass'
import cn from 'classnames'
import { TimerProps } from './types'

import Countdown, { zeroPad } from 'react-countdown'

import React, { useEffect, useState } from 'react'
import { CountUntil } from '@/components/costs/Until'
import { ruCase } from '@/helpers/index'

export const Timer = ({ className, ...rest }: TimerProps) => {
	const [isLoaded, setIsLoaded] = useState(false)
	const date = CountUntil()

	useEffect(() => {
		setIsLoaded(true)
	}, [])

	const renderer = ({ days, hours, minutes, seconds }) => {
		const timerData = [
			{
				number: zeroPad(days),
				description: ruCase(days, ['день', 'дня', 'дней'])
			},
			{
				number: zeroPad(hours),
				description: ruCase(hours, ['час', 'часа', 'часов'])
			},
			{
				number: zeroPad(minutes),
				description: ruCase(minutes, ['минута', 'минуты', 'минут'])
			},
			{
				number: zeroPad(seconds),
				description: ruCase(seconds, ['секунда', 'секунды', 'секунд'])
			}
		]

		return (
			<ul className={stls.list}>
				{timerData.map(item => (
					<li className={stls.item} key={item.description}>
						<div className={stls.item__number}>{item.number}</div>
						<div className={stls.item__description}>{item.description}</div>
					</li>
				))}
			</ul>
		)
	}

	return (
		<div className={cn(className, stls.content)} {...rest}>
			{' '}
			{isLoaded && <Countdown date={date} renderer={renderer} />}
		</div>
	)
}
