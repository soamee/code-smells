const products = [];
// const products = [{
//   name: 'Super cool T-shirt',
//   stock: 4
// }];

const noProductsAvailable = !products.length;
const isOneProductAvailable = products.length;
const noStockProductAvailable = !products[0]?.stock;

if (noProductsAvailable || (isOneProductAvailable && noStockProductAvailable)) {
  console.log('No products available');
} else {
  console.log('Products available!');
}