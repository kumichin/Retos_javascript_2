
/*
Escriba una función maxValue(nums)que tome una matriz de números como argumento.
La función debe devolver el número más grande de la matriz.
Si la matriz está vacía, la función debe devolver null.
*/

// your code here
function maxValue(nums){
    if(nums.length === 0){
        return null
    }
    let maximo = null;
    for(i = 0; i < nums.length; i++){
        let numero = nums[i]
        if(numero > maximo){
               maximo = numero
        }
    }return maximo;
}




console.log(maxValue([4, 6, 3, 5, 42, 4])); // 42
console.log(maxValue([-2, -3, -7, 3 ])); // 3
console.log(maxValue([])); // null
