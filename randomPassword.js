const characterCode = Array.from(Array(26)).map((_, i) => i + 97)
const lettersLower = characterCode.map(num => String.fromCharCode(num))
const lettersUpper = characterCode.map(num => String.fromCharCode(num).toUpperCase())
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const symbols = ['@', '/', '*', '-', '_', '$', '#', '&']
const longitud = 15

const generatePass = (
  lgtCharacters: number, 
  number: boolean, 
  symbol: boolean, 
  letLower: boolean, 
  letUpper: boolean
) => {
  if (lgtCharacters < 8) return 'La contraseña debe de tener al menos de 8 caracteres'
  
  const optCharacter = [
    ...(number ? numbers : []),
    ...(symbol ? symbols : []),
    ...(letLower ? lettersLower : []),
    ...(letUpper ? lettersUpper : [])
  ]
  
  let pass: string = ''	
  
  for(let a = 0; a < lgtCharacters; a++) {
    const idx = Math.floor(Math.random() * optCharacter.length)
    pass += optCharacter[idx]
  }
  
  return pass
}

generatePass(20, true, true, true, false)
generatePass(15, false, true, true, false)
generatePass(0, false, true, true, false)
