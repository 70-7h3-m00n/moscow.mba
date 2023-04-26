import { useRouter } from 'next/router'

const setLastDayOfMonth = (currentDate: Date) => {
	currentDate.setMonth(currentDate.getMonth() + 1)
	currentDate.setDate(0)
}

const setNextDay = (currentDate: Date, currentDay: number) =>
	currentDay <= 27
		? currentDate.setDate(currentDay <= 17 ? 17 : 27)
		: setLastDayOfMonth(currentDate)

const Until = ({ preposition = true, executive = false }) => {
	const { locale } = useRouter()
	const currentDate = new Date()
	const currentDay = currentDate.getDate()

	setNextDay(currentDate, currentDay)

	return (
		<>
			{currentDate.toLocaleString(['ru-RU', 'en-US'], {
				day: 'numeric',
				month: 'long'
			})}
		</>
	)
}

export default Until
