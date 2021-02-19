
const products = [];
// const products = [{
//   name: 'Super cool T-shirt',
//   stock: 4
// }];

if (!products.length || (products.length && products[0].stock === 0)) {
  console.log('No products available');
} else {
  console.log('Products available!');
}