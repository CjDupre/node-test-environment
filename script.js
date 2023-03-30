
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

let sum = 0;
numbers.forEach(function (value, index, array) {
    sum = sum + value;
});
console.log(sum);