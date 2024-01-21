// It ignores starting and ending spaces
a = parseFloat(" 100 ");
console.log('parseFloat(" 100 ") = ' + a);

// It returns only numeric values until it encounters Not a Number character
b = parseFloat("2024@techunsolved");
console.log('parseFloat("2024@techunsolved") = ' + b);

// It returns NaN on Non Numerical characters
c = parseFloat("techunsolved@2024");
console.log('parseFloat("techunsolved@2024") = ' + c);

d = parseFloat("3.14");
console.log('parseFloat("3.14") = ' + d);

// It returns only first numeric value it encounters
e = parseFloat("22 01 2024")
console.log('parseFloat("22 01 2024") = ' + e);