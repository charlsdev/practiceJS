var fecha = new Date(),
hoy = fecha.getDate(),
month = fecha.getMonth() + 1,
year = fecha.getFullYear();
month = (month < 10) ? `0${month}` : month;
const ress = (`${fecha.getDate()}/${fecha.getMonth() + 1}` === '23/09') ? 'Feliz Cumpleaños' : '';
console.log(ress)

let beginning = '01/01/'+year,
    end = hoy+'/'+month+'/'+year;
console.log(beginning)
console.log(end)

const result = beginning - end;
console.log(result)

// Mostrar numero de decimales
let num = 21.777777;
console.log(num.toFixed(1));
console.log(num.toFixed(2));
console.log(num.toFixed(3));
console.log(num.toFixed(4));

const Tarea = '61022175a5bc575020423dd4',
      TareaE = '61022175a5bc575020423dd4';
console.log(Tarea.toString() == TareaE.toString());

const fecha1 = "2021-07-23 13:50",
      fecha2 = "2021-07-22";
const value = (fecha1 < fecha2) ? true : false;
console.log(value);

var cad = ".word";
cad.slice(-3);
cad.slice(-3, -1);
cad.slice(1, 0);

var str = ".xlsxl";
var res = str.split(".");
console.log(res[1]);

var palabra = 'Hola Mundo';
console.log(palabra.toLowerCase());
console.log(palabra.toUpperCase());
console.log(palabra.blink());
console.log(palabra.bold());
console.log(palabra.italics());
console.log(palabra.strike());

let frutas = ["Manzana", "Banana", "Toronja"];
frutas.push('Naranja');     // Añade el elemento al final del array
console.log(frutas);
frutas.pop();               // Elimina el ultimo elemento del array
console.log(frutas);
frutas.unshift('Fresa');    // Añade un elemento al inicio del array
console.log(frutas);
frutas.shift();             // Elimina el primero elemento del array
console.log(frutas);
frutas.indexOf('Banana');   // Indica la posicion del elemento
frutas.isArray;             // Devuelve 1 si es un array y 0 no lo es
while(frutas.length > 0)    // Proceso para vaciar un array
  frutas.pop(); 

 console.log(frutas);

// Iteradores en JS
let range = {
  from: 1,
  to: 5
}

range[Symbol.iterator] = function() {
  return {
    current: this.from,
    last: this.to,
    
    next() {
      if (this.current <= this.last) {
        return {
          done: false,
          value: this.current++
        }
      } else {
        return {
          done: true
        }
      }
    }
  };
}

for (let num of range) {
  console.log(num)
}

var counterAsig;
counterAsig++;
console.log(counterAsig)
counterAsig == 1 ? 'Verdadero' : 'Falso';

function between(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
between(1, 40);

let emails = ["Eli", "Victor", "Carlos"];
console.log(emails.sort());

emails.forEach(emailSTD => {
  console.log(emailSTD);
})

var reco = emails.map(emailSTD => {
  console.log(emailSTD);
  return emailSTD;
})
// Nuevo Array
console.log(reco)

// Recorrido de un objeto
Object.entries(/*req.body*/).forEach(([key, value]) => {
    ++cont;

    if (cont % 2 === 0) {
       if (Array.isArray(value)) {
          value.forEach(val => {
             resp.push(val);
          });
       } else {
          resp.push(value);
       }
    } else {
       ques.push(value);
    }
 });