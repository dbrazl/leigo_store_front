export function addToCart(item) {
  return {
    type: "@cart/ADD_TO_CART",
    payload: { item },
  };
}

export function removeOneFromCart(item) {
  return {
    type: "@cart/REMOVE_ONE_FROM_CART",
    payload: { item },
  };
}

export function removeFromCart(item) {
  return {
    type: "@cart/REMOVE_FROM_CART",
    payload: { item },
  };
}
