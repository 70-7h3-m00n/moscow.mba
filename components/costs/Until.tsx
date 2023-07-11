import { useRouter } from 'next/router'

// need to take Until date from Strapi, if there's no date count it

const setLastDayOfMonth = (currentDate: Date) => {
	currentDate.setMonth(currentDate.getMonth() + 1, 0)
}

const setNextDay = (currentDate: Date, currentDay: number) =>
	currentDay <= 20
		? currentDate.setDate(currentDay <= 11 ? 11 : 20) // changed 10 to 11
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
