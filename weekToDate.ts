import moment from 'moment'

function getStartDateOfWeekWithMoment(weekNumber, year) {
   // Establecer la fecha al primer día del año y luego a la semana deseada
   let date = moment().year(year).week(weekNumber);
   // Ajustar al inicio de la semana
   return date.startOf('isoWeek');
}

// Ejemplo de uso
console.log(getStartDateOfWeekWithMoment(2, 2024).format('YYYY-MM-DD'));

/********************************/

const getStartDateofWeek = (week: number, year: number, date: 'start' | 'end') => {
   return date === 'start'
      ? moment().isoWeekYear(year).isoWeek(week).startOf('isoWeek').format('YYYY-MM-DD')
      : moment().isoWeekYear(year).isoWeek(week).endOf('isoWeek').format('YYYY-MM-DD')
}

console.log(getStartDateofWeek(1, 2024, 'start'))
console.log(getStartDateofWeek(1, 2024, 'end'))