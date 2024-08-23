
/*
Escriba una función firstVowel(str)que tome una cadena y
devuelva la primera vocal que aparezca secuencialmente en la cadena.
Si la cadena no contiene una vocal, devuelva null.
*/


function firstVowel(str){

    let vocales = "aeiou";
    let arrayVocal = []



    for(i = 0; i < str.length; i++){
        let arrayStr = str[i];
        if( vocales.includes(arrayStr)){
          return arrayStr;
        }

    }return null
}





console.log(firstVowel('battery')); // 'a'
console.log(firstVowel('tunnel')); // 'u'
console.log(firstVowel('dog')); // 'o'
console.log(firstVowel('conventional')); // 'o'
console.log(firstVowel('rhythm')); // null
