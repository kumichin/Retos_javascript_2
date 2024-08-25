
/*
Escriba una función pitPat(max)que acepte un número como argumento.
La función debe devolver una matriz que contenga todos los números positivos menores o
iguales a maxque sean divisibles por 4 o 6, pero no por ambos.
*/

// your code here
function pitPat(max){
    let arr = []
    for( i = 0; i < max; i++){
        if(i % 4 === 0 && i % 6 === 0){

        }else if(i % 4 === 0){
            arr.push(i)

        }else if( i % 6 === 0){
            arr.push(i)
        }
    }return arr;
}



console.log(pitPat(18)); // [ 4, 6, 8, 16, 18 ]
console.log(pitPat(30)); // [ 4, 6, 8, 16, 18, 20, 28, 30 ]
