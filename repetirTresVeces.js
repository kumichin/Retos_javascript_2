
/*
Escriba una función tripler(nums)que tome una matriz como argumento.
La función debe devolver una nueva matriz
que contenga tres veces cada número de la matriz original.
*/


function tripler(nums){

    let arr = [];

    for(i = 0; i < nums.length; i++){
        let producto = nums[i] * 3;
        arr.push(producto);
    }
    return arr;
}


console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]
