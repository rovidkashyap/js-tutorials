const marks = 85;

let Branch;

switch (true) {
    case marks >= 90:
        Branch = "Computer Science Engineering";
        break;
    case marks >= 80:
        Branch = "Mechanical Engineering";
        break;
    case marks >= 70:
        Branch = "Chemical Engineering";
        break;
    case marks >= 60:
        Branch = "Electronics and Communication";
        break;
    case marks >= 50:
        Branch = "Civil Engineering";
        break;
    default:
        Branch = "Bio Technology";
        break;
}

console.log(`Student Branch name is : ${Branch}`);