// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    let i = 1
    while (i <= n) {
        let string = ''
        let j = 1
        while (j <= n) {
            if (j <= i) {
                string = string + '#'
            } else {
                string = string + ' '
            }
            j++
        }
        console.log(string)
        i++
    }
}

module.exports = steps;
