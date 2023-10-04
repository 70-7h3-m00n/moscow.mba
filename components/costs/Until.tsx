import { ContextStaticProps } from '@/context/index'
import useAt from '@/hooks/useAt'
import { useRouter } from 'next/router'
import { useContext } from 'react'

type UntilType = {
	First: number
	FirstOneMoreDay: boolean
	Second: number
	SecondOneMoreDay: boolean
	Third: number
	ThirdOneMoreDay: boolean
	id: number
}[]

const setLastDayOfMonth = (currentDate: Date): Date => {
	currentDate.setMonth(currentDate.getMonth() + 1, 0)
	return currentDate
}

const setNextDay = (currentDate: Date, currentDay: number): Date => {
	if (0 < currentDay && currentDay <= 10) {
		currentDate.setDate(10)
	} else if (10 < currentDay && currentDay <= 20) {
		currentDate.setDate(20)
	} else if (20 < currentDay && currentDay <= 31) {
		currentDate = setLastDayOfMonth(currentDate)
	}
	return currentDate
}

function findNearestFutureDate(datesArray) {
	let nearestDate = Infinity
	let nearestDiff = Infinity
	for (const dateTimestamp of datesArray) {
		const difference = dateTimestamp - Date.now()
		if (difference >= 0 && difference < nearestDiff) {
			nearestDate = dateTimestamp
			nearestDiff = difference
		}
	}
	return new Date(nearestDate)
}

const Until = ({ preposition = true, executive = false }) => {
	const at = useAt()
	const { until } = useContext(ContextStaticProps)
	const untilDates: UntilType = until
	const { locale } = useRouter()
	const currentDate = new Date()
	const currentDay = currentDate.getDate()
	const currentYear = currentDate.getFullYear()

	const untilArray =
		untilDates?.map((month, idx) => {
			const {
				First,
				FirstOneMoreDay,
				Second,
				SecondOneMoreDay,
				Third,
				ThirdOneMoreDay
			} = month
			return [
				new Date(currentYear, idx, First),
				FirstOneMoreDay ? new Date(currentYear, idx, First + 1) : null,
				new Date(currentYear, idx, Second),
				SecondOneMoreDay ? new Date(currentYear, idx, Second + 1) : null,
				new Date(currentYear, idx, Third),
				ThirdOneMoreDay ? new Date(currentYear, idx, Third + 1) : null
			]
		}) || []

	const untilMillisecondsArray = untilArray
		?.flat()
		?.map(date => new Date(date).setHours(23, 0, 0, 0))
		?.filter(date => !!date)
		?.sort((a, b) => a - b)

	const nearestFutureDate: Date =
		untilArray.length === 0
			? setNextDay(currentDate, currentDay)
			: findNearestFutureDate(untilMillisecondsArray)

	return (
		<>
			{nearestFutureDate.toLocaleString([at.en ? 'en-US' : 'ru'], {
				day: 'numeric',
				month: 'long'
			})}
		</>
	)
}

export default Until
