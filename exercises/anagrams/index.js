// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const charsA = {}
    const charsB = {}
    stringA.replace(/[^\w]/g, "").toLowerCase()
    stringB.replace(/[^\w]/g, "").toLowerCase()

    for (let char of stringA) {
        if (!charsA[char]) {
            charsA[char] = 1
        } else {
            charsA[char]++
        }
    }

    for (let char of stringB) {
        if (!charsB[char]) {
            charsB[char] = 1
        } else {
            charsB[char]++
        }
    }
    
    if (Object.keys(charsA).length !== Object.keys(charsB).length) {
        return false
    }

    for (let char of Object.keys(charsA)) {
        if (charsA[char] !== charsB[char]) {
            return false
        }
    }

    return true
}

module.exports = anagrams;
