
/*
Escriba una función que tome una ubicación, ya sea "FRONT" o "BACK" y elimine el
elemento que se encuentra al frente o al final de la matriz dada. Si la ubicación
es cualquier otra que no sea "FRONT" o "BACK", imprima un error. Su función no
debe devolver nada y debe mutar la matriz original.
(Sugerencia: busque las funciones de JavaScript: push/ pop/ shift/ unshift)
*/


function removeFromArray(location, arr) {
    // Your code here
    if (location == "FRONT") {
        arr.shift()
    } else if (location == "BACK") {
        arr.pop()
    } else {
        console.log("ERROR");
    }
}


testArray = [0,1,2,3,4]

removeFromArray("FRONT", testArray)
console.log(testArray) // [1,2,3,4]

removeFromArray("BACK", testArray)
console.log(testArray) // [1,2,3]

removeFromArray("MIDDLE", 4, testArray) // "ERROR"
console.log(testArray) // [1,2,3]
