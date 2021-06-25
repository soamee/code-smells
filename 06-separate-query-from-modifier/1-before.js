const updateOrders = async ids => {
  try {
    //  QUERY
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
    //  MODIFY
    const updatedOrders = orders.map(order => ({
      // Whatever
      // super
      // logic
      // you
      // make
      // to
      // update
      // thoseorders
    }))
    return updatedOrders;
  } catch (err) {
    throw err;
  }
};