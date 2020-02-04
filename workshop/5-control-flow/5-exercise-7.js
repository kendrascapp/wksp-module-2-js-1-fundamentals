// -------------------------------------------------------------
// Control Flow Exercises
// ----------
// note: need to have covered control flow for these exercises
// -------------------------------------------------------------

// Q7
// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.
// For numbers divisible by 3, print "Fizz" instead of the number,
// and for numbers divisible by 5 (and not 3), print "Buzz" instead.

// for verification purposes, I've added in the number that is replaced by either 'Fizz' or 'Buzz' 
//in brckets after the word. 

for (let number = 1; number <=100; number++) {
    let printNum = number;
    if (number % 5 === 0) {
        printNum = `Buzz (${number})`;
    }
    if (number % 3 === 0) {
        printNum = `Fizz (${number})`;
    }

    console.log(printNum);
}

    // If the number is divisible by 3, replace with 'Fizz'
    // this will also replace any Buzz value.
        // If the number is divisible by 5, replace with 'Buzz'
            // define a new variable and assign it the value of the current number
// e.g.
//
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// ...