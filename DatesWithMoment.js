import moment from 'moment'

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

const date = moment().format('YYYY-MM-DD')

moment(date).utcOffset('-05:00').date(1).subtract(1, 'months').format('YYYY-MM-DD')
Number(moment(date).format('MM')) - 2
moment(date).utcOffset('-05:00').date(months[Number(moment(date).format('MM')) - 2]).subtract(1, 'months').format('YYYY-MM-DD')

let fechaOne = moment(date)
  .utcOffset('-05:00')
   .date(1)
   .subtract(1, 'months')
   .format('YYYY-MM-DD')

fechaOne

moment(fechaOne)
   .utcOffset('-05:00')
   .date(months[Number(moment(fechaOne).format('MM')) - 1])
   .format('YYYY-MM-DD')


let fechaTwo = moment(date)
  .utcOffset('-05:00')
   .date(1)
   .subtract(2, 'months')
   .format('YYYY-MM-DD')

fechaTwo

moment(fechaTwo)
   .utcOffset('-05:00')
   .date(months[Number(moment(fechaTwo).format('MM')) - 1])
   .format('YYYY-MM-DD')

/**********************************************************/

months[Number(moment().subtract(1, 'months').format('MM')) - 1]

moment(moment().subtract(1, 'months').format('YYYY-MM-DD'))
  .utcOffset('-05:00')
  .date(months[Number(moment().subtract(1, 'months').format('MM')) - 1])
  //.subtract(1, 'months')
  .format('YYYY-MM-DD')

/***********************************************************/

const dateOne = moment().utcOffset('-05:00').subtract(1, 'days').format('YYYY-MM-DD'),
dateTwo = moment('2023-09-06T23:00:00.000').format('YYYY-MM-DD')

dateOne
dateTwo
dateTwo >= dateOne
