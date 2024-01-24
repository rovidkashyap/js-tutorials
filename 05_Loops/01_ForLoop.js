// let x;

// for (let i = 2; i < 5; i++) {
//     console.log(`Value of x:${i}`);
// }

const subjects = ["Maths", "Science", "Polity", "History"];
let i = 0;
let len = subjects.length;
let gfg = "";

for (i; i < len;){
    gfg += subjects[i];
    // can be increased inside the loop
    i++;
}
console.log(gfg);