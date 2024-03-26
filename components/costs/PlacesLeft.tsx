import { HTMLAttributes } from 'react'
import { CountUntil } from './Until'
import { motion } from 'framer-motion'

const pseudoRandom = seed => {
	const x = Math.sin(seed++) * 10000
	return x - Math.floor(x)
}

const generateSeed = (id, currentDate) => {
	const dateStr =
		currentDate.getFullYear().toString() +
		(currentDate.getMonth() + 1).toString() +
		currentDate.getDate().toString()
	return parseInt(dateStr + id.toString(), 10)
}

const PlacesLeft = ({ uniqueKey }: { uniqueKey: number }) => {
	const maxSeats = 45
	const minSeats = 8
	const currentDate = new Date()
	const closestEnrollmentDate = CountUntil()

	const seed = generateSeed(uniqueKey, currentDate)
	const randomFactor = pseudoRandom(seed)

	const dayDifference = Math.max(
		0,
		Math.min(
			12,
			Math.floor(
				(closestEnrollmentDate.getTime() - currentDate.getTime()) /
					(1000 * 60 * 60 * 24)
			)
		)
	) // Ограничиваем dayDifference диапазоном от 0 до 12 дней

	// Рассчитываем уменьшение мест на основе dayDifference, учитывая, что dayDifference может быть от 0 до 12
	const daysFactor = 12 - dayDifference // Чем ближе дата, тем меньше значение daysFactor

	const dynamicSeatsReduction = Math.round(
		(maxSeats - minSeats) * (daysFactor / 12) * randomFactor
	)
	let remainingSeats = maxSeats - dynamicSeatsReduction
	remainingSeats = Math.max(remainingSeats, minSeats)

	return (
		<>
			{uniqueKey ? (
				<motion.span
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}
				>
					&nbsp;{remainingSeats}
				</motion.span>
			) : (
				<></>
			)}
		</>
	)
}

export default PlacesLeft
