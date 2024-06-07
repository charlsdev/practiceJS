/*import moment from 'moment'

Array.from({ length: 10 }, (_, i) => ({
   value: String(moment().year() - i),
   label: String(moment().year() - i)
}))

moment().month() + 1*/

import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
dayjs.extend(customParseFormat)

enum TimeUnit {
   Milliseconds = 'milliseconds',
   Seconds = 'seconds',
   Minutes = 'minutes',
   Hours = 'hours',
   Days = 'days'
}

interface TimePeriod {
   start: string
   end: string
}

const calculateTimeBetweenPeriods = (timePeriods: TimePeriod[]) => {
   // Calcular el tiempo total transcurrido en milisegundos
   const milliseconds = timePeriods.reduce((acc, period) => {
      const start = dayjs(period.start)
      const end = dayjs(period.end)

      // Suma la diferencia en milisegundos
      return acc + end.diff(start)
   }, 0)

   // Convertir el total a diferentes unidades
   const seconds = milliseconds / 1000
   const minutes = seconds / 60
   const hours = minutes / 60
   const days = hours / 24

   return {
      [TimeUnit.Milliseconds]: milliseconds,
      [TimeUnit.Seconds]: seconds,
      [TimeUnit.Minutes]: minutes,
      [TimeUnit.Hours]: hours,
      [TimeUnit.Days]: days
   }
}

calculateTimeBetweenPeriods([{
  start: '2024-05-01 08:00:00', 
  end: '2024-05-01 10:00:00'
}])

Array.from({ length: 1 }, (_, i) => 2021 + i).flatMap(year =>
  Array.from({ length: 12 }, (_, i) => i + 1).map(month => ({
     value: `${month}/${year}`,
     label: `${month}/${year}`
  }))
)