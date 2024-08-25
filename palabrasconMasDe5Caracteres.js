
/*
Escriba una función longWords(words)que acepte una matriz de palabras.
La función debe devolver una matriz que contenga solo las palabras que tengan
más de 5 caracteres.
*/

// your code here
function longWords(words){
    let arr = [];

    for(i = 0; i < words.length; i++){
        let word = words[i]
        if(word.length > 5){
            arr.push(word)
        }

    }return arr;
}




console.log(longWords(['bike', 'skateboard','scooter', 'moped'])); // [ 'skateboard', 'scooter' ]
console.log(longWords(['couscous', 'soup', 'ceviche', 'solyanka' ,'taco'])); // [ 'couscous', 'ceviche', 'solyanka' ]
