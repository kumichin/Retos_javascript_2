
/*
Escriba una función reverseString(str)que acepte una cadena.
La función debe devolver una nueva cadena en la que el orden de los caracteres
esté invertido.
*/

//METODO 1:

function reverseString(str){
    let str1 = [...str];
    let reverse = str1.reverse();
    let str2 = reverse.join()
    console.log(str2);
    return str2;
}



console.log(reverseString('fish')); // 'hsif'
console.log(reverseString('marathon')); // 'nohtaram'


//METODO 2:

let reverseString = function(str) {
    let reversed = '';

    for (let i = str.length - 1; i >= 0; i--) {
      let char = str[i];
        reversed += char;
      }

    return reversed;
  };

  console.log(reverseString('fish')); // 'hsif'
  console.log(reverseString('marathon')); // 'nohtaram'
