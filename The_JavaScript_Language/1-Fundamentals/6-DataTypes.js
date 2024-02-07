/* 8 DATA TYPES IN JAVASCRIPT */

/* 7 Primitive Data Types */
// 1 - number       (for intgeger/floating-point)
// 2 - bigint       (for integer numbers of arbitary length)
// 3 - string       (for string have 0 or more characters)
// 4 - boolean      (for true or false)
// 5 - null         (for unknown values)
// 6 - undefined    (for unassigned values)

/* 1 Non-Primitive Date Types */
// 7 - object       (for complex data structures)

// 8 - typeof - is used to fetch the type of datatype it was.

// 1 - number
let n = 123;
n = 12.345;
console.log(typeof(n));

// 2 - bigInt
let num = 9007199254740991n;
console.log(typeof(num));
// Number having 'n' at end means it is bigint.

// 3 - string
let str = "Hello";
let str2 = 'Single quotes are ok too';
console.log(typeof(str2));

// 4 - Boolean
let nameFieldChecked = true;
let ageFieldChecked = false;
console.log(typeof(ageFieldChecked));

// 5 - null
let age = null;
console.log(typeof(age));

// 6 - Undefined
let age2 = 100;
age2 = undefined;
console.log(age2);
console.log(typeof(age2));
