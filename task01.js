const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

console.log(" Task 1.1 ");
console.log("First fruit:", fruits[0]);
console.log("Last fruit:", fruits[fruits.length - 1]);

// Add a new fruit
fruits.push("Pineapple");

// Remove second fruit (Banana)
fruits.splice(1, 1);

console.log("Array length:", fruits.length);
console.log("Updated fruits array:", fruits);


// Task 1.2: Looping
console.log("\nTask 1.2 (for loop) ");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log("\nTask 1.2 (forEach loop)");
fruits.forEach(fruit => {
    console.log(fruit);
});