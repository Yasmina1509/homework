
let originalArray = [2, 4, 9, 10, 45, 67, 8, 90];
let newArray = [];

for (let i = 0; i < originalArray.length; i++) {
    if (originalArray[i] % 2 === 0) {
        newArray.push(originalArray[i]);
    }
}
console.log(originalArray)
console.log(newArray);

