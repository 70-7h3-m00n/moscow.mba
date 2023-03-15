import { useRouter } from 'next/router'

const setLastDayOfMonth = (currentDate: Date) => {
	currentDate.setMonth(currentDate.getMonth() + 1)
	currentDate.setDate(0)
}

const setNextDay = (currentDate: Date, currentDay: number) =>
	currentDay <= 20
		? currentDate.setDate(currentDay <= 10 ? 10 : 20)
		: setLastDayOfMonth(currentDate)

const Until = ({ preposition = true, executive = false }) => {
	const { locale } = useRouter()
	const currentDate = new Date()
	const currentDay = currentDate.getDate()

	setNextDay(currentDate, currentDay)

	return (
		<>
			{currentDate.toLocaleString(locale, {
				day: 'numeric',
				month: 'long'
			})}
		</>
	)
}

export default Until
