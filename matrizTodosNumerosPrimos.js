
/*
Escriba una función primeFactorsque acepte un número como argumento.
La función debe devolver una matriz que contenga todos los números primos que
pueden dividir el número dado.
*/

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

let primeFactors = function(n) {
    let primeFacts = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0 && isPrime(i)) {
            primeFacts.push(i);
        }
    }
    return primeFacts;
}

console.log(primeFactors(12));  // [2, 3]
console.log(primeFactors(7));   // [7]
console.log(primeFactors(16));  // [2]
console.log(primeFactors(30));  // [2, 3, 5]
console.log(primeFactors(35));  // [5, 7]
console.log(primeFactors(49));  // [7]
console.log(primeFactors(128)); // [2]
