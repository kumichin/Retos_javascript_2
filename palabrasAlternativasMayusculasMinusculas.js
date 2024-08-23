
/*
Escriba una función alternatingWordsque acepte una matriz de palabras como argumento
. La función debe modificar la matriz de entrada de modo que las palabras
se alternen entre mayúsculas y minúsculas. La primera palabra debe estar en
mayúscula.
*/

let alternatingWords = function(words) {
    for (let i = 0; i < words.length; i++) {
        if (i % 2 === 0) {
            words[i] = words[i].toUpperCase();
        } else {
            words[i] = words[i].toLowerCase();
        }
    }
};

let words1 = ['Belka', 'STRELKA', 'laika', 'DEZIK', 'Tsygan'];
alternatingWords(words1);
console.log(words1); // [ 'BELKA', 'strelka', 'LAIKA', 'dezik', 'TSYGAN' ]

let words2 = ['Yellowstone', 'Yosemite', 'Zion', 'Acadia'];
alternatingWords(words2);
console.log(words2); // [ 'YELLOWSTONE', 'yosemite', 'ZION', 'acadia' ]
