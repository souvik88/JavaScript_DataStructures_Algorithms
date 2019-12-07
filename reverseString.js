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

function reverse(str) {
    // check correct input
    if (!str || str.length < 1 || typeof str !== 'string') {
        return 'not a correct input, try again';
    }
    const backwards = [];
    const totalItems = str.length - 1
    for (let i = totalItems; i >= 0; i--) { // loop through the array in reverse
        backwards.push(str[i]);
    }
    console.log(backwards.join(''));
}

reverse('Hello, how are you?');




















