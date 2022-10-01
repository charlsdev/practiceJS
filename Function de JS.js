let fecha = '17/08/2022'

fecha.split('/').reverse().join('-')
fecha.slice(3, 4) === '0'

const mes: any = {
  '01': "Enero",
  '02': "Febrero",
  '03': "Marzo",
  '04': "Abril",
  '05': "Mayo",
  '06': "Junio",
  '07': "Julio",
  '08': "Agosto",
  '09': "Septiembre",
  '10': "Octubre",
  '11': "Noviembre",
  '12': "Diciembre",
}

const date = fecha.replaceAll(
  fecha.split('/')[1], 
  mes[fecha.split('/')[1]]
).replaceAll('/', ' de ');