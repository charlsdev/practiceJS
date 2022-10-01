const validate_ID = (word: string, sli: number, tam: number, ini: string) => {
   var letnumRegex =
      /^[a-z0-9_-]{20}$/i;
  
   let pre = word.slice(0, sli),
      suf = word.slice(sli);
  
   if (word.length === tam) {
      if (letnumRegex.test(suf)) {
         if (pre === ini) {
            return true;
         }
      }
   }
  
   return false;
};

validate_ID('TOUR$anrecardtk5w-zpqt-i2', 5, 25, 'TOUR$');
validate_ID('TXD$0z9awywoilgvp27h2bbb', 4, 24, 'TXD$');

const validate_hora = (hora: string) => {
   var horaRegex =
      /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
   if (horaRegex.test(hora)) {
      return true;
   }
   return false;
};

validate_hora('09:59');