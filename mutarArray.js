
/*
Escriba una función additionMutator
que acepte una matriz y un número como argumentos.
La función debe modificar la matriz de entrada de modo que a cada elemento
se le sume el número indicado.
*/


function additionMutator(arr, num){
    let array = []
    for(i = 0; i < arr.length; i++){
        arr[i] += num
        return arr;
    }
}

let nums1 = [3, 7, 1, 2];
additionMutator(nums1, 4);
console.log(nums1);     // [ 7, 11, 5, 6 ]

let nums2 = [11, 9, 4];
additionMutator(nums2, -1);
console.log(nums2);     // [ 10, 8, 3 ]
