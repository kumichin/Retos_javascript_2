
/*
Escriba una función doubler(numbers)que tome una matriz de números
y devuelva una nueva matriz donde cada elemento de la matriz original
se multiplica por 2.
*/
function doubler(numbers) {
    newArray = []
    // your code here...
    for(let i = 0; i <numbers.length; i++){
        let producto = numbers[i] * 2;
        newArray.push(producto);

    }return newArray;

}

console.log(doubler([1, 2, 3, 4])); // => [2, 4, 6, 8]
console.log(doubler([7, 1, 8])); // => [14, 2, 16]
