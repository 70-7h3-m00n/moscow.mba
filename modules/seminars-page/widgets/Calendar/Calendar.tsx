import stls from './Calendar.module.sass'
import cn from 'classnames'
import { CalendarProps } from './types'

import { useContext, useState } from 'react'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { ru } from 'date-fns/locale'
import { contextStaticPropsSeminars } from 'pages/seminars'

export const Calendar = ({ className, ...rest }: CalendarProps) => {
	const { dateRange, setDateRange } = useContext(contextStaticPropsSeminars)

	const futureSeminars = () =>
		setDateRange([
			{
				startDate: new Date(),
				endDate: null,
				key: 'selection'
			}
		])

	return (
		<div className={cn(className, stls.calendarWrapper)} {...rest}>
			<DateRange
				className={stls.calendar}
				onChange={item => setDateRange([item.selection])}
				locale={ru}
				ranges={dateRange}
				showSelectionPreview={false}
				editableDateInputs={false}
				showMonthAndYearPickers={false}
				showDateDisplay={false}
				rangeColors={['#FF3535', '#FF3535', '#000000']}
				direction='vertical'
				weekdayDisplayFormat={'eeeeee'}
				fixedHeight
			/>
			<button className={stls.calendarButton} onClick={() => futureSeminars()}>
				Все предстоящие семинары
			</button>
		</div>
	)
}
