let user = { name: "Rovid" };
let admin = { name: "Kashyap" };

function sayHi() {
    console.log(this.name);
}

// Use the same function in two objects
user.f = sayHi;
admin.f = sayHi;

user.f();
admin.f();

admin['f']();