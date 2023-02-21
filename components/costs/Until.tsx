import { useAt } from '@/hooks/index'

const Until = ({ preposition = true, executive = false }) => {
	const at = useAt()
	const currentDate = new Date()
	const currentDay = currentDate.getDate()
	let currentMonth = currentDate.getMonth()
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
	if (executive)
		currentMonth =
			currentMonth + 7 > 11 ? currentMonth + 7 - 11 : currentMonth + 7

	return (
		<>
			{preposition && (at.en ? 'until ' : 'до ')}
			{currentDay < 20 ? '20' : '5'}{' '}
			{(() => {
				let output
				if (currentDay < 20) {
					output = months[currentMonth]
				} else {
					currentMonth === 11
						? (output = months[0])
						: (output = months[currentMonth + 1])
				}
				return '28 февраля'
				return output
			})()}
		</>
	)
}

export default Until
