// let map1 = new Map([
//     [1, 2],
//     [2, 3],
//     [4, 5]
// ]);

// console.log("Map1");
// console.log(map1);

// let map2 = new Map([
//     ["firstname", "rovid"],
//     ["lastname", "kashyap"],
//     ["website", "techunsolved"]
// ]);

// console.log("Map2");
// console.log(map2);

let map1 = new Map();

map1.set("first name", "Rovid");
map1.set("last name", "Kashyap");
map1.set("website", "techunsolved")
    .set("friend 1", "Dhirendra")
    .set("friend 2", "Ruchi");

console.log(map1);

console.log("map1 has friend 3 ? " + map1.has("friend 3"));

console.log("get value for key website " + map1.get("website"));

console.log("get value for key friend 3 " + map1.get("friend 3"));

console.log("delete a element with key website " + map1.delete("website"));

console.log("map1 has website ? " + map1.has("website"));

console.log("delete element with key website " + map1.delete("friend 3"));

map1.clear();

console.log(map1);
