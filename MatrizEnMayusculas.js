
/*
Escriba una función yeller(words)que tome una matriz de palabras.
La función debe devolver una nueva matriz donde se escriba en mayúsculas
cada elemento de la matriz original.
*/

// your code here
function yeller(words){

    let arr = [];

    for(i = 0; i < words.length; i++){

        let mayusculas = words[i].toUpperCase();
        arr.push(mayusculas);
    }return arr;
}



console.log(yeller(['hello', 'world'])); // [ 'HELLO!', 'WORLD!' ]
console.log(yeller(['kiwi', 'orange', 'mango'])); // [ 'KIWI!', 'ORANGE!', 'MANGO!' ]
