import { useEffect, useState } from 'react'

const PlacesLeft = ({ uniqueKey }) => {
	const currentDate = new Date()
	const currentDay = currentDate.getDate()

	const [places, setPlaces] = useState(4)
	const divisible = typeof uniqueKey === 'number' ? uniqueKey % 10 : 8

	useEffect(() => {
		const placesLeft =
			(1 <= currentDay && currentDay <= 3) ||
			(11 <= currentDay && currentDay <= 13) ||
			(21 <= currentDay && currentDay <= 23)
				? Math.floor((divisible + 15) / 2)
				: (4 <= currentDay && currentDay <= 6) ||
				  (14 <= currentDay && currentDay <= 16) ||
				  (24 <= currentDay && currentDay <= 26)
				? Math.floor((divisible + 10) / 3)
				: (7 <= currentDay && currentDay <= 10) ||
				  (17 <= currentDay && currentDay <= 20) ||
				  (27 <= currentDay && currentDay <= 31)
				? Math.floor((divisible + 5) / 3)
				: 10

		setPlaces(placesLeft)
	}, [places])

	return <>{places}</>
}

export default PlacesLeft
