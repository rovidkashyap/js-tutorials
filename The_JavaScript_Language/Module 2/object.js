// JS Objects in Key Value Pair

var person = {
    firstName: 'Rovid',
    secondName: 'Kashyap',
    age: 33,
    ownsCar: false
}

console.log(person);

var cap = {
    firstName: 'Rovid',
    lastName: 'Kashyap',
    age: 33,
    friends: ['Dhirendra Varun', 'Ruchi Khandelwal', 'Chetan Singh'],
    address: {
        state: 'Uttar Pradesh',
        city: {
            name: 'Agra',
            pincode: 282004
        }
    }
}

cap.movies = ['age if ultron', 'civil war', 'first avenger']

console.log(cap);
console.log(cap.friends[1]);
console.log(cap.firstName);