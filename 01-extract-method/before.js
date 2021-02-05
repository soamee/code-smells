const user = {
  id: 1,
  info: {
    firstName: 'Javier',
    lastName: 'Manzano',
    address: 'Calle Mayor, 4',
  }
};

const makeTransfer = ({ amount, user }) => {
  console.log(`Transfering ${amount} €....`)
  
  console.log(`firstName: ${user.info.firstName}`);
  console.log(`lastName: ${user.info.lastName}`);
  console.log(`address: ${user.info.address}`);
};

makeTransfer({ user, amount: 10 });
