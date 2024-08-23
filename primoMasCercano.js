
/*
Escriba una función prevPrimeque acepte un número como argumento.
La función debe devolver el número primo más cercano que sea menor que el argumento
 dado. Dado que 2 es el número primo más pequeño, devuelva null si no se puede
 devolver ningún número.
*/

let prevPrime = function(n) {
    if (n <= 2) {
        return null
    }
    let i = n - 1;
    while (true) {
        if (isPrime(i)) {
            return i;
        }
        i--;
    }
};

let isPrime = function(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
};


console.log(prevPrime(32)); // 31
console.log(prevPrime(33)); // 31
console.log(prevPrime(14)); // 13
console.log(prevPrime(7));  // 5
console.log(prevPrime(4));  // 3
console.log(prevPrime(2));  // null
console.log(prevPrime(1));  // null
