const jsonString = '{"name": "T-shirt", "price": 25}';
const product = JSON.parse(jsonString);

console.log(product.name);  // Output: T-shirt
console.log(product.price); // Output: 25

