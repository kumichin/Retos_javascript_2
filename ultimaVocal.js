
/*
Escriba una función lastVowel(str)que tome una cadena y devuelva la última vocal
que aparece secuencialmente en la cadena.
Tenga en cuenta que la cadena puede contener mayúsculas y minúsculas.

Sugerencia: puede que le resulten útiles los métodos String.toLowerCase()o
.String.toUpperCase()
*/

let lastVowel = function(str) {
    let vowels = 'aeiou';

    for (let i = str.length - 1; i >= 0; i--) {
        let char = str[i];
        if (vowels.includes(char.toLowerCase())) {
            return char;
        }
    }

    return null;
};

console.log(lastVowel('battery')); // 'e'
console.log(lastVowel('TUNNEL')); // 'E'
console.log(lastVowel('dog')); // 'o'
console.log(lastVowel('conventional')); // 'a'
console.log(lastVowel('rhythm')); // null
