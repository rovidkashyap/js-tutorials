// DIFFERENCE BETWEEN FUNCTION DECLARATION AND FUNCTIONEXPRESSION

// Function Declaration
// function sum(a, b) {
//     return a + b;
// }

// Function Expression
// let sum = function(a, b){ // No Function Name is defined
//     return a + b;
// };

let age = 18;
console.log("What is your age? " + age);

let welcome;

// conditionally declare a function
if (age < 18) {
    welcome = function(){
        console.log("Hello!");
    }
} else {
    welcome = function() {
        console.log("Greetings!");
    }
}

// ... use it later
welcome();