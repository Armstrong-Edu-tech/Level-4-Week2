fetch('https://fakestoreapi.com/products/1')
  .then(response => response.json()) // Convert JSON string into JavaScript object
  .then(data => {
    console.log('Product Title:', data.title);
    console.log('Price:', data.price);
  })
  .catch(error => console.error('Error:', error));