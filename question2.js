// first we convert the string to a number
let stringInput = "25";
let numberOutput = Number(stringInput);
console.log(`Converted: ${numberOutput}, Type: ${typeof numberOutput}`);

// testing Truthy/Falsy values
const testValues = [0, "", "hello", null, undefined, NaN];

testValues.forEach((val) => {
    if (val) {
        console.log(`"${val}" is Truthy`);
    } else {
        console.log(`"${val}" is Falsy`);
    }
}); //  :) done
