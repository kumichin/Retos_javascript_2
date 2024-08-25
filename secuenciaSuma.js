
/*
La suma de un número es la suma de todos los números positivos menores o iguales
que el número. Por ejemplo: la suma de 3 es 6 porque 1 + 2 + 3 = 6, la suma de 6
es 21 porque 1 + 2 + 3 + 4 + 5 + 6 = 21. Escribe una función summationSequenceque
tome dos números: starty length. La función debe devolver una matriz que contenga lengthel
total de elementos. El primer número de la secuencia debe ser el startnúmero . En cualquier punto,
para generar el siguiente elemento de la secuencia tomamos la suma del elemento anterior. Puedes
asumir que length no es cero.
*/


function summation(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

function summationSequence(start, length) {
    let seq = [start];

    for (let i = seq.length; i < length; i++) {
        seq.push(summation(seq[seq.length - 1]));
    }
    return seq;
}

console.log(summationSequence(3, 4)); // [3, 6, 21, 231]
console.log(summationSequence(5, 3)); // [5, 15, 120]
