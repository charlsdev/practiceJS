const validate_email = (correo) => {
   var dominio = 'unesum.edu.ec';
   if (correo.trim().length > 0) {
      if (correo.trim().endsWith(dominio)) {
         return true;
      }
   }
   var emailRegex =
      /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
   if (!emailRegex.test(correo)) {
      return false;
   }
   return false;
};

let letter = 'villacreses-carlos7200@unesum.edu.ec';
validate_email(letter);