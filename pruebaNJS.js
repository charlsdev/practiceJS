const multiplyRange = ({start, end}) => {
  var range = [];
    for (var i = start; i <= end; i++) {
    	range.push(i);
    }
  
  let multiply = (a, b) => a * b;
  var result = range.reduce(multiply);
  
	return result;
}

multiplyRange({'start': 1, 'end': 3})
multiplyRange({'start': 2, 'end': 4})
multiplyRange({'start': 3, 'end': 5})
multiplyRange({'start': 0, 'end': 1})