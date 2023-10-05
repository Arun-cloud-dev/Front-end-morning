//if, else , switch 



// create a variable age  with if and else statement 

// let age = 16;


// if (age >= 18) {
//     console.log("You are an  Adult")
// } else {
//     console.log("you are not an adult")
// }



// conditional statement "switch"
// let day = 3 ;

// switch (day) {
//     case 1:
//         console.log("Moday");
//         break;
//     case 2:
//         console.log("tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
// }




// 1. Parameter and Argument 

// function ar(x) {
//     if (x < 1) {
//         return "less than one"
//     } else if (x < 2) {
//         return "less than two"
//     } else {
//         return "Greater than or equal to two "
//     }
// }
// console.log(ar(0))



// ar is a function that takes one parameter, x. The parameter x is defined within the parentheses of the function declaration.

// When you call the ar function with ar(2), you are passing 2 as an argument to the function. In this case:

// x is the parameter.
// 2 is the argument that is passed to the x parameter when the function is called.
// The function then evaluates the value of x and returns one of three possible strings based on the value of x:

// In the console.log(ar(2)); statement, the function ar is called with 2 as an argument, and it returns "Greater than or equal to two"





// 3. Change the order of logic in the function so that it will 
//return the correct statements in all cases.

// 1. loveYou(4) should return the string Less than 5
// 2. loveYou(6) should return the string Less than 10
// 3. loveYou(11) should return the string Greater than or equal to 10

// function loveYou(y) {
//     if (y < 5) {
//         return "less than 5";
//     } else if (y < 10) {
//         return "string Less than 10"
//     } else {
//         return "Greater than or equal to 10";
//     }
// }
// console.log(loveYou(4));







function caseInSitch(ar) {
    let answer = "";

    switch (ar) {
      case 1:
        answer = "Alpha";
        break;
      case 2:
        answer = "Beta";
        break;
      case 3:
        answer = "Gamma";
        break;
      case 4:
        answer = "Delta";
        break;
    }

    return answer;
    
 }
console.log(caseInSitch(4));