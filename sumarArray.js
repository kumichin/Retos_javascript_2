
/*
Escriba una función sumArray(array)que tome una matriz de números
y devuelva la suma total de todos los números.
*/

function sumArray(array) {
    // your code here...
    let suma = array.reduce((acc, currentValue) => acc + currentValue, 0)
    return suma;
}

console.log(sumArray([5, 6, 4])); // => 15
console.log(sumArray([7, 3, 9, 11])); // => 30
