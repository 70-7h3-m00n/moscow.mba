import { useRouter } from 'next/router'

// need to take Until date from Strapi, if there's no date count it

/*
По зачислениям:
Зачисления:
27.07 и 28.07


Август
10.08  и 11.08
21.08 и 22.08
30.08 и 31.08

Сентябрь
11.09 и 12.09
20.09 и 21.09  10
28.09 и 29.09  20 - 31

Октябрь
10.10 и 11.10
19.10 и 20.10
30.10 и 31.10

На 27.07 сейчас самое первое дело перенести, т.к. это будет мотиватором для КЛ оставить больше заявок на этой неделе, а нам возможность быстрее их закрыть.
Парные дни - т.к. один день зачисляем, на второй идет дозачисление.
Остальные дни были из расчета выходных дней.
*/
const setLastDayOfMonth = (currentDate: Date) => {
	currentDate.setMonth(currentDate.getMonth() + 1, 0)
}

const setNextDay = (currentDate: Date, currentDay: number) => {
	currentDate.setDate(10)

	// where data about undil day stored
	// if (0 < currentDay && currentDay <= 10) currentDate.setDate(10)
	// if (10 < currentDay && currentDay <= 20) currentDate.setDate(20)
	// if (20 < currentDay && currentDay <= 31) setLastDayOfMonth(currentDate)

	return currentDate

	// currentDay <= 20
	// ? currentDate.setDate(currentDay <= 10 ? 10 : 20)
	// : currentDate.setDate(27)
	// // : setLastDayOfMonth(currentDate)
}

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
