// create a function that reverses a string
// reverse this string --> 'Hi, my name is Souvik'

function reverse(str) {
    // check input
    if (!str || str.length < 1 || typeof str !== 'string') {
        return 'That is not correct. Invalid entry';
    }
    
    const backwards = [];
    const totalItems = str.length - 1;
    for (let i = totalItems)
}