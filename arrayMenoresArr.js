
/*Escriba una función evenNumbers(max)que acepte un número como argumento.
La función debe devolver una matriz que contenga todos los números positivos y
 pares que sean menores que max.

Defina esta función utilizando la sintaxis de expresión de función.*/


// your code here
function evenNumbers(max){
    let arr = [];

    for(i = 1; i < max; i++){
        if(i % 2 === 0){
            arr.push(i)
        }
    }return arr;
}


console.log(evenNumbers(7)); // [ 2, 4, 6 ]
console.log(evenNumbers(12)); // [ 2, 4, 6, 8, 10 ]
console.log(evenNumbers(15)); // [ 2, 4, 6, 8, 10, 12, 14 ]
