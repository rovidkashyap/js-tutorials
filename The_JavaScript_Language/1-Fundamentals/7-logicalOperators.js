// || (OR) Operator - Finds the First Truthy Value
console.log(true || true);      // true
console.log(false || true);     // true
console.log(true || false);     // true
console.log(false || false);    // false

console.log(1 || 0);                    // 1 is truthy
console.log(null || 1);                 // 1 is the truthy
console.log(null || 0 || 1);            // 1 is the truthy
console.log(undefined || null || 0);    // 0, all falsy return last value

let firstName = "";
let lastName = "SuperCoder";
let nickName = "Rovid";

console.log(firstName || lastName || nickName || "Anonymous");

// && (AND) Operator - Finds the First Falsy Value
console.log(true && true);      // true
console.log(false && true);     // false
console.log(true && false);     // false
console.log(false && false);    // false

let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
    console.log("The time is 12:30");
} else{
    console.log("The time is not 12:30");
}

// ! (NOT) Operator
console.log(!true);
console.log(!0);