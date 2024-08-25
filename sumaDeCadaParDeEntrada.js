
/*
Escriba una función adjacentSumsque acepte una matriz de números como argumento.
 La función debe devolver una nueva matriz que contenga la suma de cada par de
 elementos de la matriz de entrada.
*/

// Your code here
function adjacentSums(array){

    let arr = [];

    for(i = 0; i < array.length-1; i++){

        let suma = array[i] + array[i + 1];
        arr.push(suma)

    }return arr;
}

console.log(adjacentSums([3, 8, 7, 1]));        // [ 11, 15, 8 ]
console.log(adjacentSums([10, 5, 4, 3, 9]));    // [ 15, 9, 7, 12 ]
console.log(adjacentSums([2, -3, 3]));          // [-1, 0]
