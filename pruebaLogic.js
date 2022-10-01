/**
** Producto mayor de las posiciones subyacentes
**/
function solution(inputArray) {
  let res = 0, mul = 0;
	for (let a = 1; a < inputArray.length; a++) {
    mult = inputArray[a-1] * inputArray[a]
  	if (mult > res) res = mult
    if (a === 1) res = mult
  }
  return res
}
solution([5, 1, 2, 3, 1, 4])
solution([-23, 4, -3, 8, -12])


/**
** Palindrome verificación
**/
// function solution(inputString) {
// 	const pal = inputString.split('').reverse().join('');
//   res = (inputString === pal) ? true : false
//   return res
// }
// solution("aabaa")
// solution("abac")


/**
** Conocer el siglo del año
**/
// function solution(year) {
//   let siglo = 0;
//   for (let a = 0; a < year; a +=100) {
//   	if(year >= a || year <= a+99) ++siglo
//   }
//   return siglo
// }
// solution(1998)
// solution(1700)
// solution(2001)