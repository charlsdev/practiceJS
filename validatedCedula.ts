function validarCedula(cedula: string): boolean {
   if (cedula.length !== 10) {
      return false;
   }

   const provincia = parseInt(cedula.substring(0, 2), 10);
   if (provincia < 1 || provincia > 24) {
      return false;
   }

   let sum = 0;
   for (let i = 0; i < cedula.length - 1; i++) {
      let num = parseInt(cedula.charAt(i), 10);
      if (i % 2 === 0) {
         num = num * 2;
         if (num > 9) {
            num = num - 9;
         }
      }
      sum += num;
   }

   const decenaSuperior = Math.ceil(sum / 10) * 10;
   const digitoVerificador = decenaSuperior - sum;

   return digitoVerificador === parseInt(cedula.charAt(9), 10);
}

validarCedula('1315767200')