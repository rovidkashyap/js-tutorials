// Convert JSON Text to a JavaScript Object

let text = '{"model":[' +
    '{"carName":"Baleno","brandName":"Maruti"}, ' +
    '{"carName":"Aura","brandName":"Hyundai"}, ' +
    '{"carName":"Nexon","brandName":"Tata" }]}';

const cars = JSON.parse(text);

console.log("The car name is: " + cars.model[2].carName +
    " of brand: " + cars.model[2].brandName);