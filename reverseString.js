// create a function that reverses a string
// output: reverse this string --> 'Hi, my name is Souvik'

// function reverse(str) {
//     // check input
//     if (!str || str.length < 2 || typeof str !== 'string') {
//         return 'That is not correct. Invalid entry';
//     }
//     const backwards = [];
//     const totalItems = str.length - 1;
//     for (let i = totalItems; i >= 0; i--) {
//         backwards.push(str[i]);
//     }
//     console.log(backwards);
//     return backwards.join('');
// }
// reverse('Hi! My name is Souvik.');

function reverse1(str) {
    // check correct input
    if (!str || str.length < 5 || typeof str !== 'string') {
        console.log('not a correct input, try again');
    } else {
        const backwards = [];
        const totalItems = str.length - 1
        for (let i = totalItems; i >= 0; i--) { // loop through the array in reverse
            backwards.push(str[i]);
        }
        console.log(backwards.join(''));
    }
}
reverse1('q');

// reverse2 - a shorter version
function reverse2(str) {
    if (!str || str.length < 5 || typeof str !== 'string') {
        console.log('not a correct input, try again');
    } else {
        console.log(str.split('').reverse().join(''));
    }
}
reverse2('This is reverse 2');






















