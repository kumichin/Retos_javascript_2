
/*
Escriba una función allElseEqualque acepte una matriz de números.
La función debe devolver el elemento de la matriz que sea igual a la mitad de la
suma de todos los elementos de la matriz. Si no existe dicho elemento,
el método debe devolver un valor nulo.
*/

function allElseEqual(arr) {
    // your code here
   let sum = arr.reduce((acc, currentValue) => acc + currentValue, 0)
    let mitad = sum / 2;
    for(i = 0; i < arr.length; i++){
        if(arr[i] === mitad){
            return arr[i]        }
    }return null


}

console.log(allElseEqual([2, 4, 3, 10, 1])); // 10
console.log(allElseEqual([6, 3, 5, -9, 1])); // 3
console.log(allElseEqual([1, 2, 3, 4]));     // null
