// da spread operator

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];

console.log("Combined Array:", combinedArray);

// pattern 

const rows = 5;
for (let i = 1; i <= rows; i++) {
    // this prints spaces followed by stars to form the pyramid scheme
    let spaces = ' '.repeat(rows - i);
    let stars = '* '.repeat(i);
    console.log(spaces + stars);
}

// lasty, our backwards counter

let count = 10;
while (count >= 1) {
    console.log(count);
    count--;
}