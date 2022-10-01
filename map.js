let ant = [
  { "tipo": "uno"},
  { "tipo": "doc"},
  { "tipo": "tres"},
  { "tipo": "cuatro"},
  { "tipo": "cinco"}
]

let antecedentes: string = ''

ant.map((a, b) => {
  if (b > 0) antecedentes += ' - ';
  antecedentes += a.tipo;
})

console.log(antecedentes)