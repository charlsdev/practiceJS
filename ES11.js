/**************************************************************************
***************************************************************************
**************************************************************************/

const string = "Tú estás bien, por eso yo estoy bien";

/**
* Método `.replace()` permite reemplazar el primer match de las ocurrencias de una cadena por otra, siempre que coincidan. 
*/
const replacedString = string.replace("bien", "mal");
console.log(replacedString);

/**
* Método `.replaceAll()` permite reemplazar todos los matchs de las ocurrencias de una cadena por otra, siempre que coincidan. 
*/
const replacedString2 = string.replaceAll("bien", "mal"); 
console.log(replacedString2);

/**************************************************************************
***************************************************************************
**************************************************************************/

/**
* Logical Assignment Operators
* La idea es combinar operadores lógicos con expresiones de asignación.
*
* Se incluyen los siguientes 3 operadores nuevos:
*
* ??= «QQ equals» – asigna un valor solo si vale null/undefined.
* &&= «And and equals» – asigna una valor a la variable si su valor resuelve a true
* ||= «Or or equals» – asigna un valor a la variable si su valor resuelve a false
*/

const saluda = (nombre: string) => {
  nombre ??= "Alumno";    // si no tiene valor (undefined), valdrá "Alumno"
  return `Hola ${nombre}`;
}
console.log(saluda());
console.log(saluda('Pepe'));