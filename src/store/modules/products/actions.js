export function indexProductsRequest() {
  return {
    type: "@products/INDEX_PRODUCTS_REQUEST",
  };
}

export function indexProductsSuccess(body) {
  return {
    type: "@products/INDEX_PRODUCTS_SUCCESS",
    payload: { body },
  };
}

export function indexOneProductRequest(params) {
  return {
    type: "@products/INDEX_ONE_PRODUCT_REQUEST",
    payload: { params },
  };
}

export function indexOneProductSuccess(body) {
  return {
    type: "@products/INDEX_ONE_PRODUCT_SUCCESS",
    payload: { body },
  };
}

export function productsFailure(message, reasons) {
  return {
    type: "@products/PRODUCTS_FAILURE",
    payload: { message, reasons },
  };
}

export function resetPage() {
  return {
    type: "@products/RESET_PAGE",
  };
}

export function resetProducts() {
  return {
    type: "@produts/RESET_PRODUCTS",
  };
}
