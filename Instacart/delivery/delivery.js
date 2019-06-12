function delivery(order, shoppers) {
  const takeOrders = [];
  const maxTime = order[2] + order[1];
  const minTime = order[1];
  for (var i = 0; i < shoppers.length; i++) {
    let orderDistance = shoppers[i][0] + order[0];
    let orderTime = (orderDistance/shoppers[i][1]) + shoppers[i][2];
    if (orderTime <= maxTime && orderTime >= minTime) {
      takeOrders.push(true);
    } else {
      takeOrders.push(false);
    }
  }
  return takeOrders;
}
