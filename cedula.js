const cedula = (ced: string) => {
  var total = 0;
  
  for (let i = 0; i < 9; i++) {
    if (i % 2 === 0) {
      var aux = ced.charAt(i) * 2;
      if (aux > 9) aux -= 9;
      total += aux;
    } else {
      total += parseInt(ced.charAt(i));
    }
  }
  
  total = total % 10 ? 10 - total % 10 : 0;
  return total;
}

cedula("095862514");
cedula("131256985");
cedula("130256895");
cedula("131444585");
cedula("131576722");