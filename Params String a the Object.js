// function myFunction(obj, a) {
//   let res;
  
//   Object.entries(obj).forEach(([key, value]) => {
//     const result = key == a;
//     if (result) {
//       res = value;
//     }
//   });
  
//   return res;
// }

function myFunction(obj, key) {
  return obj[key]
}

myFunction({continent: 'Asia',  country: 'Japan'}, 'continent');
myFunction({country: 'Sweden',  continent: 'Europe'}, 'country');