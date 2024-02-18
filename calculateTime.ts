import dayjs from 'dayjs'

export function sumarHoras(horaInicial: string, tiempoASumar: string) {
   // Convertir los strings a objetos Day.js
   let hora = dayjs(horaInicial);
   let duracion = dayjs(tiempoASumar);

   // Sumar horas y minutos
   let resultado = hora.add(duracion.hour(), 'hour').add(duracion.minute(), 'minute');

   // Formatear el resultado a un string HH:mm
   return resultado.format('YYYY-MM-DD HH:mm:ss');
}

const horaInicial = '2024-01-06 23:30:00.000'
const tiempoASumar = '2024-01-06 01:30:00.000'

sumarHoras(horaInicial, tiempoASumar)

dayjs().format('YYYY-MM-DD')