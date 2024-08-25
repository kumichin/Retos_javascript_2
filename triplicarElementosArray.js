
/*
Escriba una función tripleSequenceque acepte dos números starty length.
La función debe devolver una matriz que represente una secuencia que comience con
start y tenga lengthelementos de longitud. En la secuencia, cada elemento debe ser
el triple del elemento anterior.
Suponga que la longitud es al menos 1.
*/

function tripleSequence(start, length) {
    // your code here
    if (length === 0) {
        return [];
    }

    let seq = [start];
    while (seq.length < length) {
        let last = seq[seq.length - 1];
        let next = last * 3;
        seq.push(next);
    }

    return seq;
};

console.log(tripleSequence(2, 4)); // [2, 6, 18, 54]
console.log(tripleSequence(4, 5)); // [4, 12, 36, 108, 324]
