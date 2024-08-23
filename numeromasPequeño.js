
/*
Escriba una función minValue(nums)que tome una matriz de números como argumento.
La función debe devolver el número más pequeño de la matriz.
Si la matriz está vacía, la función debe devolver null.
*/

// FORMA 1:

// your code here
function minValue(nums){

    if(nums.length === 0){
        return null
    }
    let min = Math.min(...nums);
    return min;
}






console.log(minValue([4, 6, 3, 5, 2, 4])); // 2
console.log(minValue([-2, -3, -7, 3 ])); // -7
console.log(minValue([])); // null


// FORMA 2:

function minValue(nums){

    let min = null;

    for(let i = 0; i < nums.length; i++){
        let num = nums[i];
        if (nu < min){
            min = num;
        }
    }return min;
}
console.log(minValue([4, 6, 3, 5, 2, 4])); // 2
console.log(minValue([-2, -3, -7, 3 ])); // -7
console.log(minValue([])); // null
