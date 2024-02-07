let user = {
    name: "Rovid",
    age: 33
};

console.log(user.name);
console.log(user.age);

let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",

    "91": "India"
};

for (let item in codes) {
    console.log(item);
}