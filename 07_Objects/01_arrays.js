// Creating Empty arrays in JavaScript
let names = [];
console.log(names);

// Creating an Array and initializing with values
let courses = ["HTML", "CSS", "JavaScript", "React"];
console.log(courses);

// Access Array Elements
console.log(courses[0]);
console.log(courses[1]);
console.log(courses[2]);
console.log(courses[3]);

// Access The First Element of Array
let firstElement = courses[0];
console.log(`First Element : ${firstElement}`);

// Access the Last Element of Array
let lastElement = courses[courses.length - 1];
console.log(`Last Element : ${lastElement}`);

// Modify the Array Element
courses[1] = "Bootstrap";
console.log(courses);

// Adding Element to the Array
courses.push("Angular");

// Add Element to the Beginning
courses.unshift(".Net Core");

console.log(courses);

/* Remove the ELements from Array */

// Remove and returns the last element
let lastElementFromArray = courses.pop();
console.log("After Removed the last elements: " + courses);

// Remove and returns the first element
let firstElementFromArray = courses.shift();
console.log("After Removed the First Elements: " + courses);

// Remove 2 elements starting from index 1
courses.splice(1 ,2);
console.log("After Removed 2 elements starting from index 1: " + courses);

// Iterate through the Array Elements
let mycourses = [".Net Core", "MVC", "Entity Framework", "C#.Net", "React"];

for (let i = 0; i< mycourses.length; i++) {
    console.log(mycourses[i]);
}