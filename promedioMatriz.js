
/*
Escriba una función avgVal(arr)que acepte una matriz como argumento.
La función debe devolver el promedio de todos los valores de la matriz.
Si la matriz está vacía, debe devolver null.
*/


// your code here
function avgVal(arr){
    if(arr.length === 0){
        return null;
    }
    let sum = arr.reduce((acc, currentValue) => acc + currentValue, 0);
    let promedio = sum / arr.length;
    return promedio;
}






console.log(avgVal([5, 10])); // 7.5
console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([])); // null
