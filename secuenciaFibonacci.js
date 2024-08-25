
/*
Escriba una función fibonacciSequenceque acepte un número como argumento.
La función debe devolver una matriz que represente la secuencia de Fibonacci
hasta la longitud indicada. El primer y el segundo número de la secuencia son 1 y
1. Para generar los números subsiguientes de la secuencia,
tomamos la suma de los dos números anteriores de la secuencia.
*/


function fibonacciSequence(num){
    let arr= [];

     num1 = 1;
     num2 =1;

     for(i = 0; i < num; i++){
         if(i < 2){
             arr.push(1)
         }else{
             num3 = num1 + num2;
         arr.push(num3);
         num1 = num2;
         num2 = num3;
         }

     }return arr;
 }

 console.log(fibonacciSequence(4));  // [ 1, 1, 2, 3 ]
 console.log(fibonacciSequence(5));  // [ 1, 1, 2, 3, 5 ]
 console.log(fibonacciSequence(8));  // [ 1, 1, 2, 3, 5, 8, 13, 21 ]
 console.log(fibonacciSequence(0));  // [ ]
 console.log(fibonacciSequence(1));  // [ 1 ]
 console.log(fibonacciSequence(2));  // [ 1, 1 ]
