
/*
Escriba una función rotate(array, num)que tome una matriz y un número
como argumentos. Cuando numsea positivo, los elementos de la matriz se deben
rotar hacia la derecha. Cuando sea numnegativo, los elementos de la matriz se
deben rotar hacia la izquierda. La función debe mutar la matriz original.

Defina esta función utilizando la sintaxis de expresión de función.
*/

let rotate = function(array, num) {
    if (num > 0) {
        for (let i = 0; i < num; i++) {
            let el = array.pop();
            array.unshift(el);
        }
    } else {
        for (let i = 0; i < -(num); i++) {
            let el = array.shift();
            array.push(el);
        }
    }
};

let arr = ['a', 'b', 'c', 'd', 'e'];
rotate(arr, 2);
console.log(arr);

let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
rotate(animals, -1);
console.log(animals);
