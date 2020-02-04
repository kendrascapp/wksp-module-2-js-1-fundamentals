// -------------------------------------------------------------
// Control Flow Exercises
// ----------
// note: need to have covered control flow for these exercises
// -------------------------------------------------------------

// Q8
// Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

for (i = 0; i < 7; i++) {
    let symbol = '#';
    for (let x = 1; x <= i; x++){
        symbol += '#';
    }
    console.log(symbol);
} 
