console.log("\n Task 2.1 ");

const numbers = [2, 5, 8, 10, 12];

// map → double numbers
const doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);

// filter → numbers > 6
const greaterThanSix = numbers.filter(num => num > 6);
console.log("Filtered:", greaterThanSix);

// reduce → sum of numbers
const totalSum = numbers.reduce((sum, num) => sum + num, 0);
console.log("Sum:", totalSum);


// Task 2.2
console.log("\n Task 2.2 ");

console.log("Includes 8:", numbers.includes(8));
console.log("Index of 10:", numbers.indexOf(10));


const sorted = [...numbers].sort((a, b) => a - b);
console.log("Sorted:", sorted);
