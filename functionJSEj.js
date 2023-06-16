const precio = "4000.000000"
Number(precio) > 0

const date = '2023-01-09'
date.split('-').reverse().join('')

const dat = '23/01/2023'
dat.split('/').reverse().join('-')

const array = [ '28', '29' ]
array.forEach((item, idx) => {
  console.log(item + ' - ' + idx)
})

const oc = 'sfg dsfgdsg'
oc.split(' ')[1]

const hora = '1500'
console.log(`${hora.slice(0, 2)}:${hora.slice(2, 4)}`)

var arreglo = [1,2,3,4,5];
arreglo.filter(function(i) { return i !== 3 });

const tel = '+593 99 761 1434'
tel.replaceAll(' ', '')

const array3 = [
  '(141, CAM-CM-k5bbk6p5lp)',
  '(142, CAM-CM-k5bbk6p5lp)',
  '(143, CAM-CM-k5bbk6p5lp)'
]
console.log(String(array3))