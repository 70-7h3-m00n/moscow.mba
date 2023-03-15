import { useAt } from '@/hooks/index'

const setLastDayOfMonth = (currentDate: Date) => {
	currentDate.setMonth(currentDate.getMonth() + 1)
	currentDate.setDate(0)
}

const setNextDay = (currentDate: Date, currentDay: number) =>
	currentDay <= 20
		? currentDate.setDate(currentDay <= 10 ? 10 : 20)
		: setLastDayOfMonth(currentDate)

const Until = ({ preposition = true, executive = false }) => {
	const at = useAt()
	const currentDate = new Date()
	const currentDay = currentDate.getDate()
	const currentMonth = currentDate.getMonth()

	setNextDay(currentDate, currentDay)

	const months = [
		at.en ? 'January' : 'января',
		at.en ? 'February' : 'февраля',
		at.en ? 'March' : 'марта',
		at.en ? 'April' : 'апреля',
		at.en ? 'May' : 'Мая',
		at.en ? 'June' : 'июня',
		at.en ? 'July' : 'июля',
		at.en ? 'August' : 'августа',
		at.en ? 'September' : 'сентября',
		at.en ? 'October' : 'октября',
		at.en ? 'November' : 'ноября',
		at.en ? 'December' : 'декабря'
	]

	return (
		<>
			{currentDate.getDate()} {months[currentMonth]}
		</>
	)
}

export default Until
