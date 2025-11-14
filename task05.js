console.log("\n Challenge Activity ");

const products = [
    {name: "Keyboard", price: 2500, qty: 2},
    {name: "Mouse", price: 1500, qty: 3},
    {name: "Monitor", price: 22000, qty: 1}
];

// total value using reduce
const totalValue = products.reduce((total, p) => {
    return total + (p.price * p.qty);
}, 0);

console.log("Total value of all products:", totalValue);