const formatDate = (date: string | Date) => {
	const currentDate = new Date(date)

	const formattedTime = `${currentDate
		.getUTCHours()
		.toString()
		.padStart(2, '0')}:${currentDate
		.getUTCMinutes()
		.toString()
		.padStart(2, '0')}`

	const formattedDate = new Intl.DateTimeFormat('ru-RU', {
		day: 'numeric',
		month: 'long'
	}).format(currentDate)

	return { time: formattedTime, date: formattedDate }
}

export default formatDate
