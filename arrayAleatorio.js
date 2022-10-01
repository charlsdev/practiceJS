const numbers = [2, 4, 2, 25, 8, 6, 1, 8, 15, 17, 20, 11, 17]

// Ordenar un array de forma aleatoria
numbers.sort(() => Math.random() - 0.5)



// Recuperar un elemento del array de forma aleatoria
const randomIndex = Math.floor(
  Math.random() * numbers.length
)
numbers[randomIndex]

// Array nuevo sin los numeros repetidos
	/* Forma #1 */
;[...new Set(numbers)]
	/* Forma #2 */
Array.from(new Set(numbers))