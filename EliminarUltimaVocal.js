
/*
Escriba una función removeLastVowel(word)que tome una cadena
y devuelva la cadena con su última vocal eliminada.
*/

// your code here
function removeLastVowel(word){
    let vocales = "aeiou";
    let cortada;
    for(i = word.length-1; i >= 0; i--){
        word1 = word[i];
        if(vocales.includes(word1)){
          return  word.slice(0, i) + word.slice(i + 1);

        }
    }console.log(cortada);
}


console.log(removeLastVowel('bootcamp')); // 'bootcmp'
console.log(removeLastVowel('better')); // 'bettr'
console.log(removeLastVowel('graph')); // 'grph'
console.log(removeLastVowel('thy')); // 'thy'
