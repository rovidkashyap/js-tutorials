 let age = console.log('What is your age?', 18);

 let welcome = (age < 18) ?
     () => console.log('Hello!'):
     () => console.log("TechUnsolved!");

 welcome();

let sayHi = () => console.log("Hello Techunsolved");
sayHi();

// Function can write in this way
let sum = function(a, b){
    return a + b;
}

result = sum(1, 2);
console.log(result);

// Or it can we write in this way
let sum1 = (a, b) => a + b; 

// or you can also write in this way also
let sum2 = () => console.log("Hello! Parenthesis");
console.log(sum1(2, 2));
sum2();

// Function Example 1
function mySum(a, b) {
    result = a+ b;
    console.log("The Sum of number is : ", result);
}
mySum(21, 24);

// Function Example 2
let mySum1 = function(a, b){
    result1 = a + b;
    console.log("The Sum is : ", result1);
}
mySum1(10, 15);

// Function Example 3
let mySum2 = (a, b) => {
    result2 = a + b;
    console.log("The Sum is : ", result2);
}
mySum2(15, 15);

// Let Convert this Function Expression with arrow function
// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
// }

// ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },
//     function() { alert("You canceled the execution."); }
// )

// Arrow Function
let ask = (question, yes, no) => {
    if (console.log(question))
        yes();
    else
        no();
}

ask("Do you agree?",
    () => console.log("You agreed."),
    () => console.log("You cancelled the execution.")
);