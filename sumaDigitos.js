function solution(n) {
  let res = 0;
  
  if (n < 10 || n > 99) {
      throw new Error('¡Número no válido!') 
  } else {
      n
      .toString()
      .split('')
      .forEach((a) => {
        res += parseInt(a);
      })
  }
  
  return res
}

solution(29)
solution(9)
solution(100)