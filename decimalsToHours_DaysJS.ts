import dayjs from 'dayjs'
//import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs().format('HHmm')

const decimalesToHours = (decimal: number) => {
   const horas = Math.floor(decimal)
   const minutos = Math.round((decimal - horas) * 60)

   const horasStr = horas.toString().padStart(2, '0')
   const minutosStr = minutos.toString().padStart(2, '0')

   return `${horasStr}:${minutosStr}`
}

decimalesToHours(1.667)