
/*
Escribe una función chooseyEndingsque acepte una matriz de palabras y una cadena
de sufijo como argumentos. La función debe devolver una nueva matriz que contenga las palabras que terminan en el sufijo dado. Si el valor que se pasa no es una matriz, devuelve una matriz vacía. SUGERENCIA: Hay funciones integradas en JavaScript que te ayudarán a determinar si una cadena termina de cierta manera.
¡Ve a ver si puedes encontrarla en MDN!
*/

// Your code here
function chooseyEndings(array, suffix){

    let arr = [];

    for(i = 0; i < array.length; i++){
        let arrays = array[i];
         if(arrays.endsWith(suffix)){
        arr.push(arrays)
    }

    }return arr;

}

console.log(chooseyEndings(['family', 'hound', 'catalyst','fly', 'timidly', 'bond'], 'ly'));
// [ 'family', 'fly', 'timidly' ]

console.log(chooseyEndings(['family', 'hound', 'catalyst','fly', 'timidly', 'bond'], 'nd'));
// [ 'hound', 'bond' ]

console.log(chooseyEndings(['simplicity', 'computer', 'felicity'], 'icity'));
// [ 'simplicity', 'felicity' ]

console.log(chooseyEndings(['simplicity', 'computer', 'felicity'], 'ily'));
// [ ]

console.log(chooseyEndings(17, 'ily'));
// [ ]
