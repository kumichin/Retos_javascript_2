
/*
Escriba una función logBetweenStepper(min, max, step)que tome 3 números como
parámetros. La función debe imprimir números entre miny maxen stepintervalos.
 Vea los siguientes ejemplos.

Sugerencia: esta función solo necesita imprimir, console.logno necesita devolver nada.
*/


function logBetweenStepper(min, max, step){
    let arr = [];

    for(i = min; i <= max; i+=step){
        arr.push(i);
    }console.log( arr);
}
// Examples:
logBetweenStepper(5, 9, 1); // prints out:
5
6
7
8
9


logBetweenStepper(-10, 15, 5)  // prints out:
-10
-5
0
5
10
15
