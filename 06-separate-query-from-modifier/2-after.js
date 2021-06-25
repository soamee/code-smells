const find = async ({ ids }) => {
  try {
    const orders = await db.Order.findAll({
      where: { [Op.in]: ids },
      include: [
        {
          model: db.OrderRequest,
          as: "orderRequests",
          where: whereOrderRequest,
          order: [["id", "ASC"]],
        },
      ],
    });
    return orders;
  } catch (err) {
    throw err;
  }
};


const updateOrders = orders => orders.map(order => ({
  // Whatever
  // super
  // logic
  // you
  // make
  // to
  // update
  // those
  // orders
}))

const updateOrders = async ids => {
  try {
    const orders = await find({ ids })
    const updatedOrders = updateOrders(orders)
    return updatedOrders;
  } catch (err) {
    throw err;
  }
};