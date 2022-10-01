const result = (array) => {
  let newData = '';
  
  for (let a = 0; a < array.length; a++) {    
    if (isNaN(array[a])) {
      if (array[a] != array[a+1]) {
        newData += array[a]
      }
    }
	}
  
  return newData;
}

result('3')
result('abb')
result('aaab')
result('ababa')