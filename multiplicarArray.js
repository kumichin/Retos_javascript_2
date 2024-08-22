
/*
Escribe una función productWithReduce(nums)que
tome una matriz de números. La función debe devolver el producto
total de multiplicar todos los números de la matriz.
Puedes suponer que numsno será una matriz vacía.
*/

// your code here
function productWithReduce(nums){
    let producto = nums.reduce((acc, currentValue) => acc * currentValue, 1)
    //puse 1, como valor inicial porque si ponia 0, multiplicaba por 0 y daba logicamente 0, asi que por 1 es lo mismo y por lo menos no da 0
    return producto;
}



console.log(productWithReduce([10, 3, 5, 2])); // 300
console.log(productWithReduce([4, 3])); // 12
