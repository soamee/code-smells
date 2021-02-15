const evasOrder = {
  id: 1000,
  items: 3,
  totalAmount: 88,
};


function PrintAmount (order) {
  let total = order.totalAmount;
  console.log(total + '€')
}

PrintAmount(evasOrder);
