export function addToCart(product) {
  return {
    type: '@cart/ADD',
    payload: product,
  };
}

export function removeFromCart(id) {
  return {
    type: '@cart/REMOVE',
    payload: id,
  };
}

export function updateAmount(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT',
    payload: {
      id,
      amount,
    },
  };
}
