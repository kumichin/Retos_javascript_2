
/*
Escribe una función greatestFactorArrayque tome una matriz de números y
devuelva una nueva matriz donde cada número par se reemplace con su factor más
grande. Un factor más grande es el número más grande que divide a otro sin dejar
resto. Por ejemplo, el factor más grande de 16 es 8. (Para el propósito de este
problema no diremos que el factor más grande de 16 es 16,
porque eso sería demasiado fácil).
*/

function greatestFactorArray(array) {
    let new_array = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            new_array.push(greatestFactor(array[i]));
        } else {
            new_array.push(array[i]);
        }
    }
    return new_array;
}

function greatestFactor(num) {
    for (let i = num-1; i > 0; i--) {
        if (num % i == 0) {
            return i;
        }
    }
}

console.log(greatestFactorArray([16, 7, 9, 14])); // [8, 7, 9, 7]
console.log(greatestFactorArray([30, 3, 24, 21, 10])); // [15, 3, 12, 21, 5]
