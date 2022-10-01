const arr = ['a', 'b', 'c'];

for (let i = 0; i < arr.length; ++i) {
   console.log(arr[i]);
}

for (let i in arr) {
   console.log(arr[i]);
}

arr.forEach((v) => 
   console.log(v)
);

for (const v of arr) {
   console.log(v);
}