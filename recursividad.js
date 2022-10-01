function computeJoinPoint(s1, s2) {
  let resOne = 0, resTwo = 0, res, result = 0;
  
  if(s1 < s2) {
    res = Array.from(String(s1), Number);
    res.forEach(ele => {
      result += ele;
    });
    resOne = s1 + result;
  }
  
	if(s1 > s2) {
    res = Array.from(String(s2), Number);
    res.forEach(ele => {
      result += ele;
    });
    resTwo = s2 + result;
  }
  
  if
  
  console.log(resOne)
  console.log(resTwo)
  return 0;
}
computeJoinPoint(471, 480);