const user = {
  id: 1,
  info: {
    firstName: 'Javier',
    lastName: 'Manzano',
    address: 'Calle Mayor, 4',
  }
};

const transferMoney = ({ amount }) => {
  console.log(`Transfering ${amount} €....`);
};

const printUserDetails = ({ user }) => {
  console.log(`firstName: ${user.info.firstName}`);
  console.log(`lastName: ${user.info.lastName}`);
  console.log(`address: ${user.info.address}`);
};

const makeTransfer = ({ amount, user }) => {
  transferMoney({ amount });
  printUserDetails({ user });
};

makeTransfer({ user, amount: 10 });
