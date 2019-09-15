// Andrei's Udemy course: DS and Algo in Javascript

// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
    let a = 10; // O(1)
    a = 50 + 3; // O(1)
  
    for (let i = 0; i < input.length; i++) { // 0(n), because a loop is always linear
      anotherFunction(); // O(n)
      let stranger = true; // O(n)
      a++; // O(n)
    }
    return a; // O(1)
  }

