
/*
Escriba una función rotateRight(array, num)que tome una matriz y un número como
argumentos. La función debe devolver una nueva matriz donde los elementos de la
matriz se rotan en los nummomentos correctos. La función no debe mutar la matriz
original y, en su lugar, devolver una nueva matriz.

Defina esta función utilizando la sintaxis de expresión de función.

SUGERENCIA: puede utilizar slice()el método Array para crear una copia de una
matriz
*/


//METODO 1:


function rotateRight(array, num){
    let pegar = ""
    let slice = array.slice(num + 1);
     pegar = array.unshift(slice);
     console.log(pegar)
}




let array = ['a', 'b', 'c', 'd', 'e'];
console.log(rotateRight(array, 2)); // [ 'd', 'e', 'a', 'b', 'c' ]
console.log(array); // [ 'a', 'b', 'c', 'd', 'e' ]

let animal = ['wombat', 'koala', 'opossum', 'kangaroo'];
console.log(rotateRight(animal, 3)); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
console.log(animal); // [ 'wombat', 'koala', 'opossum', 'kangaroo' ]


//METODO 2:

let rotateRight = function(array, num) {
    let copy = array.slice();

    for (let i = 0; i < num; i++) {
        let el = copy.pop();
        copy.unshift(el);
    }

    return copy;
};

let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(rotateRight(arr, 2)); // [ 'd', 'e', 'a', 'b', 'c' ]
console.log(arr); // [ 'a', 'b', 'c', 'd', 'e' ]

let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
console.log(rotateRight(animals, 3)); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
console.log(animals); // [ 'wombat', 'koala', 'opossum', 'kangaroo' ]
