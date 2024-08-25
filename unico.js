
/*
Escriba una función uniqueque acepte una matriz como argumento.
La función debe devolver una nueva matriz que contenga elementos de la matriz de
entrada,
sin duplicados.
*/

//FORMA 1 CON SET, QUE ELIMINA LOS ELEMENTOS REPETIDOS DE UN ARRAY.

// Your code here
function unique(arr){
    let array =[]
        let unicos = new Set(arr);
        return unicos;

}


console.log(unique([1, 1, 2, 3, 3])); // [1, 2, 3]
console.log(unique([11, 7, 8, 10, 8, 7, 7])); // [11, 7, 8, 10]
console.log(unique(['a', 'b', 'c', 'b'])); // ['a', 'b', 'c']


//METODO 2:
