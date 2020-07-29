export function indexPayamentsRequest() {
  return {
    type: "@payament/INDEX_PAYAMENTS_REQUEST",
  };
}

export function indexPayamentsSuccess(body) {
  return {
    type: "@payament/INDEX_PAYAMENTS_SUCCESS",
    payload: { body },
  };
}

export function sendCreditCardPayamenteRequest(body) {
  return {
    type: "@payament/SEND_CREDIT_CARD_PAYAMENT_REQUEST",
    payload: { body },
  };
}

export function sendCreditCardPayamentSuccess() {
  return {
    type: "@payament/SEND_CREDIT_CARD_PAYAMENT_SUCCESS",
  };
}

export function sendBilletPayamentRequest(body) {
  return {
    type: "@payament/SEND_BILLET_PAYAMENT_REQUEST",
    payload: { body },
  };
}

export function sendBilletPayamentSuccess() {
  return {
    type: "@payament/SEND_BILLET_PAYAMENT_SUCCESS",
  };
}

export function payamentFailure() {
  return {
    type: "@payament/PAYAMENT_FAILURE",
  };
}

export function resetPage() {
  return {
    type: "@payament/RESET_PAGE",
  };
}

export function resetPayaments() {
  return {
    type: "@payament/RESET_PAYAMENTS",
  };
}
