
/*
Escriba una función hasDoubleLetter(str)que acepte una cadena.
La función debe devolver un valor booleano que indique si la cadena contiene
dos caracteres iguales de forma consecutiva.
Si el valor que se pasa a la función no es una cadena, devuelva null.
*/

function hasDoubleLetter(str){

    if(typeof str != "string"){
        return null

    }else{

        for(i = 0; i < str.length; i++){
            if(str[i] === str[i+ 1] ){
                return true;
            }

        } return false;


    }

 }






 console.log(hasDoubleLetter('deer')); // true
 console.log(hasDoubleLetter('boot camp')); // true
 console.log(hasDoubleLetter('toggle')); // true
 console.log(hasDoubleLetter('taco')); // false
 console.log(hasDoubleLetter('jumper')); // false
 console.log(hasDoubleLetter(18)); // null
 console.log(hasDoubleLetter(['array'])); // null
