
/*
Escriba una función range(min, max)que acepte dos números.
La función debe devolver una matriz que contenga todos los números desde min
hasta max inclusive.

Defina esta función utilizando la sintaxis de expresión de función.
*/

function range(min, max){
    let arr =[]
    for(i = min; i <= max; i++){
       arr.push(i);

    }return arr;
}






console.log(range(3, 10)); // [ 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(range(217, 220)); // [ 217, 218, 219, 220 ]
console.log(range(-5, 1)); // [ -5, -4, -3, -2, -1, 0, 1 ]
console.log(range(10, 3)); // []
