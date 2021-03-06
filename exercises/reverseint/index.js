// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverse(str) {
    let splitString = str.split('')
    return splitString.reverse().join('')
}

function reverseInt(n) {
    const flippedN = parseInt(reverse(n.toString()))
    return n < 0 ? flippedN * -1 : flippedN
}

module.exports = reverseInt;
