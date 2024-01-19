import stls from './Timer.module.sass'
import cn from 'classnames'
import { TimerProps } from './types'

import Countdown, { zeroPad } from 'react-countdown'

import React, { useEffect, useState } from 'react'
import { CountUntil } from '@/components/costs/Until'

export const Timer = ({ className, ...rest }: TimerProps) => {
	const [isLoaded, setIsLoaded] = useState(false)
	const date = CountUntil()

	useEffect(() => {
		setIsLoaded(true)
	}, [])

	const renderer = ({ days, hours, minutes, seconds }) => {
		const timerData = [
			{ number: zeroPad(days), description: 'дней' },
			{ number: zeroPad(hours), description: 'часов' },
			{ number: zeroPad(minutes), description: 'минут' },
			{ number: zeroPad(seconds), description: 'секунд' }
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
