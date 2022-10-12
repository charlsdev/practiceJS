/*Print integers one-to-N, but print “Fizz” if an integer is divisible by three, “Buzz” if an integer is divisible by five, and “FizzBuzz” if an integer is divisible by both three and five.*/

// a mod 3 && a mod 5 ===> FizzBuzz
// a mod 3 ===> Fizz
// a mod 5 ===> Buzz

// Recorrer un array
const values = [2, 15, 6, 9, 12, 20, 16]

values.map((num) => {
  if((num % 3 === 0) && (num % 5 === 0)) return "FizzBuzz"
  if(num % 3 === 0) return "Fizz"
  if(num % 5 === 0) return "Buzz"
  return 'Not Value'
})

// Pasandole un número
function challenge(num: number) {
  if((num % 3 === 0) && (num % 5 === 0)) return "FizzBuzz"
  if(num % 3 === 0) return "Fizz"
  if(num % 5 === 0) return "Buzz"
}

challenge(9)
challenge(25)
challenge(15)