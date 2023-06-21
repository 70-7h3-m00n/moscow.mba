const PlacesLeft = () => {
	const currentDate = new Date()
	const currentDay = currentDate.getDate()

	let placesLeft =
		(1 <= currentDay && currentDay <= 3) ||
		(11 <= currentDay && currentDay <= 13) ||
		(21 <= currentDay && currentDay <= 23)
			? 7
			: (4 <= currentDay && currentDay <= 6) ||
			  (14 <= currentDay && currentDay <= 16) ||
			  (24 <= currentDay && currentDay <= 26)
			? 5
			: (7 <= currentDay && currentDay <= 10) ||
			  (17 <= currentDay && currentDay <= 20) ||
			  (27 <= currentDay && currentDay <= 31)
			? 2
			: 10

	return <>{placesLeft}</>
}

export default PlacesLeft
