const product = { name: "T-shirt", price: 25 };
const jsonString = JSON.stringify(product, null, 2);

console.log(jsonString);
/* Output:
{
  "name": "T-shirt",
  "price": 25
}
*/
