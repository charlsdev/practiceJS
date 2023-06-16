Math.trunc(6.4)
Math.ceil(6.6)
Math.round(6.8) //OjO


const data = '9658'
data.includes('*')

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInt(0, 14)
getRandomInt(-10, 10)
getRandomInt(-4, 0)