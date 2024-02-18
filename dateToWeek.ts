import moment from 'moment'

function getWeekNumber(date: string | Date) {
   let today = moment(date)
   const dayOfWeek = today.day()
   let weekOfYear = today.format('w')

   if (dayOfWeek < 6) {
      today = today.add(-6, 'days')
      weekOfYear = today.format('w')
   }

   return {
      week: weekOfYear,
      year: today.format('YYYY')
   }
}

getWeekNumber('2023-12-30')
getWeekNumber('2024-01-13')
getWeekNumber('2024-02-05')

moment('2024-01-14').format('w')