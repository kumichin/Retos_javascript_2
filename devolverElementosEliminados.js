
/*
Escriba una función popper(array, num)que acepte una matriz y un número como
argumentos. La función debe eliminar los últimos numelementos de arrayla matriz
original y modificarla. La función debe devolver una nueva matriz que contenga los
elementos eliminados.

Defina esta función utilizando la sintaxis de expresión de función.
*/


// your code here
function popper(array, num){
    let eliminado = [];

    for(i = 0; i < num; i++){
       let el = array.pop();
       eliminado.push(el)

    }return eliminado;
}






let arr1 = ['a', 'b', 'c', 'd', 'e'];
console.log(popper(arr1, 2)); // [ 'e', 'd' ]
console.log(arr1); // [ 'a', 'b', 'c' ]

let arr2 = ['kale', 'spinach', 'collard greens', 'cabbage'];
console.log(popper(arr2, 1)); // [ 'cabbage' ]
console.log(arr2); // [ 'kale', 'spinach', 'collard greens' ]
