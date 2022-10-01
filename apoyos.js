function validate_email(cedula) {
      var emailRegex =
         /^[0-9]+$/;
      if (emailRegex.test(cedula)) {
         //return true;
        if (cedula.length === 10) {
           return true;
        } else {
           return false;
        }
      }
      return false;
   };

emailEst = '1315767200'
validate_email(emailEst)

var myArr = [ 'la', 'donna', 'e', 'mobile', 'cual', 'piuma', 'al', 'vento' ];
 
console.info( myArr.includes( 'donna' ) ); // true
console.info( myArr.includes( 'pensiero' ) ); // false

console.info( myArr.indexOf( 'donna' ) ); // 1
console.info( myArr.indexOf( 'pensiero' ) ); // -1

// const itemsQues = searchValor.opciones;
// const opciones = {};

// itemsQues.forEach(item => {
//    Object.entries(req.body).forEach(([value]) => {
//       if (`${item._id}` == `${value}`) {
//          opciones.tipo = item.tipo,
//          opciones.pregunta = item.pregunta;

//          const itemsQuesIt = item.items;
//          itemsQuesIt.forEach(itemsVal => {

//          });
//       } else {

//       }
//    });
// });

// let array = [];

// Object.entries(req.body).forEach(([key, value]) => {
//    // console.log(key, value);
//    const booleanObID = ObjectId.isValidObjectId(value);

//    if (booleanObID) {
//       if (Array.isArray(value)) {
//          value.forEach(items => {
//             array.push(items);
//          });
//       } else {
//          array.push(value);
//       }
//    }
// });
// console.log(array);
// console.log('\n');  