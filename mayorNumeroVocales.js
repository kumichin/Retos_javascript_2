
/*
Escriba una función mostVowelsque tome una cadena de oraciones y
devuelva la palabra de la oración que contenga la mayor cantidad de vocales.
*/

function vowelCount(word){
    let count = 0;
    let vowels="aeiou";
    for (let i = 0 ; i < word.length ; i++){
        if(vowels.includes(word[i])){
            count++;
        }
    }
    return count;
}


function mostVowels(sentence) {
    let words = sentence.split(" ");
    let largest=0;

    for (let j = 0 ; j < words.length ; j++){

        if( vowelCount(words[j]) > largest){
            largest = j;
        }


    }
    return words[largest];

}
