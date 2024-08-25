
/*
Escriba una función factorsOf(num)que acepte un número como argumento.
El método debe devolver una matriz que contenga todos los números positivos que se
puedan dividir numsin dejar resto.

Defina esta función utilizando la sintaxis de expresión de función.
*/


function factorsOf(num){
    let arr = [];
    for(i = 1; i <= num; i++){
        if(num % i === 0){
            arr.push(i);
        }
    }return arr;
}






console.log(factorsOf(5)); // [ 1, 5 ]
console.log(factorsOf(8)); // [ 1, 2, 4, 8 ]
console.log(factorsOf(9)); // [ 1, 3, 9 ]
console.log(factorsOf(10)); // [ 1, 2, 5, 10 ]
console.log(factorsOf(24)); // [ 1, 2, 3, 4, 6, 8, 12, 24 ]
console.log(factorsOf(2017)); // [ 1, 2017 ]
