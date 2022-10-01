let adversario = 'Hulk';

//const DEFAULT_LOKI = 'Loki';

const DISFRACES_LOKI = {
   'Iron-Man': 'Magneto',
   Hulk: 'Thanos',
   Thanos: 'Odin',
};

//const loki = DISFRACES_LOKI[adversario] || DEFAULT_LOKI;

const loki = DISFRACES_LOKI[adversario];

//if(!loki) throw Error('Option not recognized!!!');

/**
* El operador de unión nula, ??, devuelve su operando del lado derecho cuando su lado izquierdo es null or undefined. Esto contrasta con el operador ||, que devolverá "string" para todos los valores "falsy".
*/
!loki ?? Error('Option not recognized!!!');

console.log(loki);