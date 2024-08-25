
/*
Escriba una función initials(name)que acepte un nombre completo como argumento.
La función debe devolver las iniciales
de ese nombre.
*/


function initials(name){

    let convertirArray = name.split(" ");
    let iniciales = [];

     for(i = 0; i < convertirArray.length; i++){
         let parte = convertirArray[i];
         iniciales.push(parte[0].toUpperCase());
     }return iniciales.join("")
}
