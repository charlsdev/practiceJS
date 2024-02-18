/*function getWeekNumber(date) {
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const pastDaysOfYear = (date - firstDayOfYear) / 86400000; // 86400000 milisegundos en un día
  return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}

const fecha = new Date('2024-01-02')
const today = getWeekNumber(fecha)
console.log(`Estamos en la semana ${today} del año.`);*/

/**************************************/

import moment from 'moment'

/// Ajustar al viernes como inicio de la semana
// Días de la semana en Moment.js son 0 (domingo) - 6 (sábado)
// Viernes es 5
let today = moment('2024-01-01');
const dayOfWeek = today.day();
let weekOfYear = today.format('w')

dayOfWeek
weekOfYear

if (dayOfWeek < 5) {
  today = today.add(-5, 'days')
  weekOfYear = today.format('w')
}

weekOfYear
today.format('YYYY')
