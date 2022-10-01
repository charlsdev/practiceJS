function* idSequence() {
// const idSequence = () => {
  let i = 0;
  
  while(true) {
    yield i++;
  }
}

const generateID =  idSequence();

console.log(generateID.next().value);
console.log(generateID.next().value);
console.log(generateID.next().value);
console.log(generateID.next().value);
console.log(generateID.next().value);