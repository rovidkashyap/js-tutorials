let str = "Create String with Single Quote";

console.log(str);

//Create string using Constructor
let str1 = new String("This is Constructor String Quote");
console.log(str1);

// Find the length of String
let length = str.length;
console.log("Length of String is : " + length);

// String Concatenation
console.log(str + str1);

// escape Characters
console.log("\'Techunsolved\' is great website.");
console.log("\"Techunsolved\" is great website.");
console.log("\\Techunsolved\\ is great website.");

// Find the Substring of String(Extract Portion of String)
console.log(str.substring(0, 25).toUpperCase());

// Search in String (Return the Index of String)
console.log(str.indexOf("String"));

// Replace the String in JavaScript
console.log(str.replace('String', 'Array'));

// Access Characters from String (Return character form that index postition)
console.log(str.charAt(7));

// Compare String in JavaScript
console.log(str == str1);
console.log(str.localeCompare(str1));
