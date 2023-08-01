import { ContextStaticProps } from '@/context/index'
import { useRouter } from 'next/router'
import { useContext } from 'react'

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
		const diff = dateTimestamp - Date.now()
		if (diff >= 0 && diff < nearestDiff) {
			nearestDate = dateTimestamp
			nearestDiff = diff
		}
	}
	return new Date(nearestDate)
}

const Until = ({ preposition = true, executive = false }) => {
	const { until } = useContext(ContextStaticProps)
	const { locale } = useRouter()
	const currentDate = new Date()
	const currentDay = currentDate.getDate()
	const currentYear = currentDate.getFullYear()

	const untilArray =
		until?.map((month, idx) => {
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
		?.map(date => Date.parse(date))
		?.filter(date => !!date)
		?.sort((a, b) => a - b)

	const nearestFutureDate: Date =
		untilArray.length === 0
			? setNextDay(currentDate, currentDay)
			: findNearestFutureDate(untilMillisecondsArray)

	return (
		<>
			{nearestFutureDate.toLocaleString([locale], {
				day: 'numeric',
				month: 'long'
			})}
		</>
	)
}

export default Until
