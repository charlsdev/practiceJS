const students = [
  {
    name: "Jill",
    lastname: "Doe",
    age: 23,
    course: "Marketing",
  },
  {
    name: "John",
    lastname: "Doe",
    age: 20,
    course: "Web Development",
  },
  {
    name: "Jack",
    lastname: "Doe",
    age: 22,
    course: "Accounting",
  },
  {
    name: "Ryan",
    lastname: "Ray",
    age: 20,
    course: "Web Development",
  },
  {
    name: "Jane",
    lastname: "Doe",
    age: 21,
    course: "Financial Management",
  },
];

const developers = [
  {
    id: 1,
    name: "John",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "NodeJS"],
  },
  {
    id: 2,
    name: "Jane",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "NodeJS"],
  },
  {
    id: 3,
    name: "Jack",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "NodeJS"],
  },
];

const points = [
  100, 20, 30, 44, 55, 70, 90, 10, 30, 45, 60, 80, 100, 100
];

// // ** Ordenar los elementos de un array
// // -- (anterior, posterior)
// // -- + DESC (<) && - ASC (>)
// const resp = points.sort((a, b) => a - b)
// console.log(Array.from(new Set(resp)))
// console.log(points.length - new Set(resp).size)

// // -- 1 DESC (<) && -1 ASC (>)
// const resp = points.sort((a, b) => a > b ? 1 : -1)
// console.log(resp)

// // ** Calcular el total de un array
// const resp = points.reduce((acu, values, index) => acu + values)
// console.log(resp)

// // ** Devuelve true si el valor exite o false sino existe
// const resp = points.some(point => point === 80)
// console.log(resp)

// // ** Destructuring in the JS
// const resp = students.map(({name, lastname, age}) => ({
//   student: `${name} ${lastname}`,
//   age
// }))
// console.log(resp)

// ** COmbinación de algunas funciones
const resp = 
  	students
      .map(({name, lastname, age}) => ({
        student: `${name} ${lastname}`,
        age
      }))
      .filter(({age}) => age > 20)
			.sort((a, b) => a.age - b.age)

console.log(resp)