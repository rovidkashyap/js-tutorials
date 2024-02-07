function showMessage(){
    console.log("This is Message");
}

showMessage();

// GLOBAL/LOCAL VARIABLES
let user = 'Rovid'; // outer/global variable

function showUserMessage(){
    let user = 'Techunsolved'   // local variable
    console.log("Hello! " + user);
}

showUserMessage();

// DEFAULT PARAMETERS
function showMessage(from, text){
    console.log(from + " " + text);
}

// showMessage("Rovid", "This Message is from User.");

// ALTERNATIVE DEFAULT PARAMETERS
// function showMessage(text){ // Empty Message
//     // ...
//     if (text === undefined){
//         text = 'empty message';
//     }

//     console.log(text);
// }

// showMessage('This is Message!');

// function showCount(count){
//     console.log(count ?? "unknown");
// }

// showCount(0);
// showCount(null);
// showCount();

//FUNCTION RETURN A VALUE
// function sum(a, b){
//     return a + b;
// }

// let result = sum(1, 2);
// console.log(result);

function checkAge(age){
    if(age >= 18){
        return true;
    } else{
        return console.log('Do you have permission from your parents?');
    }
}

let age = console.log('How old are you?', 18);

if(checkAge(age)){
    console.log('Access granted');
}
else{
    console.log('Access denied');
}