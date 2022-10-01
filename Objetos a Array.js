let arrayParams = [];

const paramDOC = {
  "paramsCalif": "Docencia",
  "valor": 2,
  "calfSum": 4,
  "calfTotal": 1
}

const paramTA = {
  "paramsCalif": "Trabajos Autónomos",
  "valor": 3,
  "calfSum": 0,
  "calfTotal": 0
}

const paramTC = {
  "paramsCalif": "Trabajo Colaborativo",
  "valor": 2,
  "calfSum": 0,
  "calfTotal": 0
}

const paramEX = {
  "paramsCalif": "Exámen",
  "valor": 3,
  "calfSum": 0,
  "calfTotal": 0
}

// JSON.stringify ==> El valor que será convertido a una cadena JSON
// JSON.parse ==> El texto que se convertirá a JSON
arrayParams.push(
  JSON.parse(JSON.stringify(paramDOC)),
  JSON.parse(JSON.stringify(paramTA)),
  JSON.parse(JSON.stringify(paramTC)),
  JSON.parse(JSON.stringify(paramEX))
);

console.log(arrayParams)