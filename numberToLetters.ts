import moment from 'moment'

const fecha = '2024-02-29T00:00:00'

moment(fecha).month()
moment(fecha).format('MM')
Number(moment(fecha).format('MM'))
moment(fecha).format('DDMMYY')

/********************************************/

function numeroALetra(numero: number) {
  if(numero < 1 || numero > 26) return 'Número fuera de rango'
  
  // 65 es el código ASCII para 'A'
  return String.fromCharCode(64 + numero);
}

// Ejemplo de uso
console.log(numeroALetra(1)); // Debería mostrar 'A'
console.log(numeroALetra(26)); // Debería mostrar 'Z'
