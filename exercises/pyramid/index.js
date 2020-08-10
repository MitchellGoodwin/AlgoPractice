// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    let i = 1
    while (i <= n) {
        let string = '#'
        let j = 1
        while (j < n) {
            if (j < i) {
                string = '#' + string + '#'
            } else {
                string = ' ' + string + ' '
            }
            j++
        }
        console.log(string)
        i++
    }
}

module.exports = pyramid;
