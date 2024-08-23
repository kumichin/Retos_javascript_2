
/*
Escriba una función que tome una ubicación, ya sea "FRONT" o "BACK" y
agregue un elemento al frente o al dorso de la matriz dada. Si la ubicación es
cualquier otra que no sea "FRONT" o "BACK", imprima un error. Su función no debe
devolver nada y debe mutar la matriz original.
(Sugerencia: busque las funciones de JavaScript: push/ pop/ shift/ unshift)
*/

function addToArray(location, element, arr) {
    // Your code here
    if (location == "FRONT") {
        arr.unshift(element)
    } else if (location == "BACK") {
        arr.push(element)
    } else {
        console.log("ERROR");
    }
}

testArray = [1,2,3]

addToArray("FRONT", 0, testArray)
console.log(testArray) // [0,1,2,3]

addToArray("BACK", 4, testArray)
console.log(testArray) // [0,1,2,3,4]

addToArray("MIDDLE", 4, testArray) // "ERROR"
console.log(testArray) // [0,1,2,3,4]
