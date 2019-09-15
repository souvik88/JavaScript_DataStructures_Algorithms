// Andrei's Udemy course: DS and Algo in Javascript

const everyone = ['gary', 'bruce', 'helen', 'hamilton', 'joyee', 'tom', 'tim', 'nemo', 'patty', 'jessica', 'jen'];
function findNemo(array) {
    for(i=0; i < array.length; i++) {
        console.log('running');
        if(array[i] === 'nemo') {
            console.log('we found nemo');
            break;
        }
    }
}

findNemo(everyone);