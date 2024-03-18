const value: number = 154.8

Math.floor(value)
Math.ceil(value)
Math.min(value)
Math.max(value)
Math.round(value)


/*************************************************************/
const wordMinDif: string[] = ['diferencia', '(-)']
const warning: string = 'DIFERENCIA DE CONSUMO (-)'

const isSubstringIncluded = wordMinDif.some(
  word => warning.toLowerCase().includes(word)
)

console.log(isSubstringIncluded)

1548 * 0.1
1548 + 154
1548 - 154
