const numeros = [1, 2, 3, 4];

const sumaIndices = numeros.reduce((acumulador, valorActual, indice) => {
  console.log(`Índice: ${indice}, Valor: ${valorActual}`);
  return acumulador + indice; // Sumamos los índices, no los valores
}, 0);

console.log(`Suma de índices: ${sumaIndices}`);


/***********************************************************/
const data = 'asuscal, jdelgado, zruiz, jmoreira'
data.split(', ').includes('mzambrano')
 'zruiz' === 'zruiz' || data.split(', ').includes('zruiz')


/**********************************************************/
import dayjs from 'dayjs'
//import 'dayjs/locale/es'
import moment from 'moment-timezone'

let fecha = "12/02/2024"

dayjs(fecha, "DD/MM/YYYY").valueOf()
moment().tz('America/La_Paz').valueOf()
moment(fecha, "DD/MM/YYYY").tz('America/La_Paz').format()
