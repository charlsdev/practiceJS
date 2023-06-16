import { customAlphabet } from 'nanoid'
const idGen = customAlphabet('1234567890abcdefghijklmnopqrstuvwxyz', 10)
console.log(idGen(20))


const d = new Date()
console.log(d.getFullYear())


const data = [{ id: 0, code: 25 }, { id: 2, code: 50 }, { id: 3, code: 75 }]
data.find(ele => ele.id === 3)


const OP = 'M206022320'
const date = OP.slice(2, 8).split("")
console.log(`${date[0]}${date[1]}/${date[2]}${date[3]}/20${date[4]}${date[5]}`)


const version = 'PT0001-PL-v125.pdf'
version.split('.')[0].split('-')[2].slice(1)
Number(version.split('.')[0].split('-')[2].slice(1))


const path = '/seg/:id'
path.split('/')[1]


const permissions = {
   DESARROLLO: ['all'],
   GERENCIA: ['all'],
   CONTABILIDAD: ['/home','/ventas', '/seg'],
   VENTAS: ['/home', '/ventas', '/seg'],
   'SRV. CLIENTE': ['/cliente', '/seg'],
   EMPAQUES: ['/empaques', '/seg'],
   PRODUCCION: ['/home', '/produccion', '/seg'],
}

const notChat: Array<string> = ['DESARROLLO', 'GERENCIA', 'CONTABILIDAD']
Object.keys(permissions).filter(itm => !notChat.includes(itm))


import moment from 'moment'
const dateNow = '2023-04-05T14:41:59.76'
moment(dateNow).startOf('hour').fromNow()


const lista = `NDPAPER,ND PAPER`
lista.split(',').map((idx) => {
  return `(${idx})`
})
