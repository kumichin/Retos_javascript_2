
/*
Escriba una función longestWord(sentence)que tome una cadena de oraciones
como argumento. La función debe devolver la palabra más larga de la oración.
 Si hay más de una "palabra más larga", devuelva la primera de estas instancias.
*/

let longestWord = function(sentence) {
    let words = sentence.split(' ');
    let longestWord = '';

    for(let i = 0; i < words.length; i++) {
        let word = words[i];
        if(word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
};

console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''
