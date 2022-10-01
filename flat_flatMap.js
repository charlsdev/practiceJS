[2, 4, 2, 25, 17, 20, 11, 17]
	.filter(n => n % 2 !== 0)
	.map(n => n * 2);

[2, 4, 2, 25, 17, 20, 11, 17]
	.map(n => n % 2 === 0 ? false : n * 2)
	.filter(n => n !== false);

// Aplanar un array 
// [#] recibe el numero de aplanamiento o [Infinity]
[2, 4, 2, 25, [2, 20, 11, [25, 2, 6],17], 17, 20, 11, 17]
	.flat(2);

[2, 4, 2, 25, [2, 20, 11, 17], 17, 20, 11, 17]
	.flat()
	.flatMap(n => n % 2 === 0 ? [] : [n * 2]);