const evasOrder = {
  id: 1000,
  items: 3,
  totalAmount: 88,
};


function PrintAmount (order) {
  console.log(order.totalAmount + '€')
}

PrintAmount(evasOrder);
