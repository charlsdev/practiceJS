function computeCheckDigit(numero) {
	let par = 0, impar = 0, resp, res, num;
  
  num = Array.from(String(numero), Number);

  for (let a = 0; a < num.length; a++) {
    if(a %2 == 0) {
       par += num[a];
    } else {
       impar += num[a];
    }
  }

  resp = par * 3;
  res = resp + impar;

  res = res % 10;

  if(res != 0) res = 10 - res;

  return res;
}

computeCheckDigit(39847)