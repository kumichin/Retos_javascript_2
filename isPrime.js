

/*
Define una función isPrime(number)que devuelve true
si numbers primo. De lo contrario, devuelve falso.
Un número es primo si solo es divisible por 1 y por sí mismo.
*/

function isPrime(number){
    for(let i = 2; i< number; i++){
    if((number % i  === 0)){
        return false;
    }
    }return true
    }


console.log(isPrime(2)); // => true
console.log(isPrime(10)); // => false
console.log(isPrime(11)); // => true
console.log(isPrime(9)); // => false
console.log(isPrime(2017)); // => true
