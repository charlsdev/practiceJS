function solution(matrix) {
  let array = [], filas, columnas, matrixA = 0, matrixB = 0, a, b;
  
	filas = matrix.length;
  columnas = matrix[filas-1].length;
  
	for (a = matrixA; a < filas; a++) {
   	for (b = matrixB; b < columnas; b++) {      
      //console.log(matrix[a][b])
      array.push(matrix[a][b])
    }
    
    if (b === columnas) {
      ++a
      ++matrixA
    }
	}
  
  return array
}

solution(
  [
    [1,2,3,4], 
 		[10,11,12,5], 
 		[9,8,7,6]
  ]
)