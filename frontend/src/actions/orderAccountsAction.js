export default function orderAccountsAction(orderItem, order) {
  return {
    type: 'ORDER_CARDS',
    orderItem,
    order,
  };
}
