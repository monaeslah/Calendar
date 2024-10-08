import { isSameDay } from 'date-fns'
import { SelectedDay } from '../utilities/interface'
export const isDateSelected = (date: Date, selectedDay: SelectedDay) => {
  const { startDate, endDate } = selectedDay
  return (
    (startDate && isSameDay(date, startDate)) ||
    (endDate && isSameDay(date, endDate))
  )
}
