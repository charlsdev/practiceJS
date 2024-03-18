import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration)

// Definir el tipo para los objetos de fecha de inicio y fin
interface TimePeriod {
  start: string; // Timestamp de inicio
  end: string;   // Timestamp de fin
}

// Ejemplo de array de periodos de tiempo
const timePeriods: TimePeriod[] = [
  { start: '2024-03-01T08:00:00.000Z', end: '2024-03-01T10:00:00.000Z' },
  { start: '2024-03-02T09:00:00.000Z', end: '2024-03-02T11:30:00.000Z' },
  // Añade más periodos según sea necesario
];

// Calcular el tiempo total transcurrido
const totalTime = timePeriods.reduce((acc, period) => {
  const start = dayjs(period.start);
  const end = dayjs(period.end);
  // Suma la diferencia en milisegundos (o en la unidad que prefieras)
  return acc + end.diff(start);
}, 0);

// Convertir el total a horas, minutos, etc., según necesites
const totalTimeInHours = totalTime / (1000 * 60 * 60); // Convierte milisegundos a horas

console.log(`Tiempo total transcurrido: ${totalTime} milisegundos`);
console.log(`Tiempo total transcurrido: ${totalTimeInHours} horas`);

// Crear una duración con el total y formatearla a HH:mm:ss
const formattedTotalTime = dayjs.duration(totalTime).format("HH:mm:ss");

console.log(`Tiempo total transcurrido: ${formattedTotalTime}`);

// Sumar tiempo a otro tiempo
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