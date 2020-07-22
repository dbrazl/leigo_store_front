export function signInRequest(body) {
  return {
    type: "@auth/SIGN_IN_REQUEST",
    payload: { body },
  };
}

export function signInSuccess(body) {
  return {
    type: "@auth/SIGN_IN_SUCCESS",
    payload: { body },
  };
}

export function signUpRequest(body) {
  return {
    type: "@auth/SIGN_UP_REQUEST",
    payload: { body },
  };
}

export function signUpSuccess(body) {
  return {
    type: "@auth/SIGN_UP_SUCCESS",
    payload: { body },
  };
}

export function restoreAccountRequest(params) {
  return {
    type: "@auth/RESTORE_ACCOUNT_REQUEST",
    payload: { params },
  };
}

export function restoreAccountSuccess() {
  return {
    type: "@auth/RESTORE_ACCOUNT_SUCCESS",
  };
}

export function signOut() {
  return {
    type: "@auth/SIGN_OUT",
  };
}

export function signFailure(message, reasons) {
  return {
    type: "@auth/SIGN_FAILURE",
    payload: { message, reasons },
  };
}
