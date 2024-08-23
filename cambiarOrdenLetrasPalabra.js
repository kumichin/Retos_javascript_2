
/*
Escriba una función reverbque acepte una palabra como argumento.
La función debe devolver una nueva palabra en la que todas las letras que vienen
después de la última vocal (incluida la vocal misma)
se repitan al final de la palabra. Si el valor que se pasa no es una cadena,
digamos que alguien pasa un número como argumento, entonces devuelva null.
*/

// Your code here
function reverb(word){

    if(typeof word != "string"){
        return null
    }
    let vocales = "aeiouAEIOU";
    for(i = word.length-1; i >= 0; i--){
        if(vocales.includes(word[i])){
          return word + word.slice(i)

        }
    } return word
}


console.log(reverb('running')); // runninging
console.log(reverb('FAMILY'));  // FAMILYILY
console.log(reverb('trash'));   // trashash
console.log(reverb('DISH'));    // DISHISH
console.log(reverb(197393));    // null
