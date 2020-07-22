export function updateUserRequest(body) {
  return {
    type: "@user/UPDATE_USER_REQUEST",
    payload: { body },
  };
}

export function updateUserSuccess(body) {
  return {
    type: "@user/UPDATE_USER_SUCCESS",
    payload: { body },
  };
}

export function inactiveUserRequest() {
  return {
    type: "@user/INACTIVE_USER_REQUEST",
  };
}

export function inactiveUserSuccess() {
  return {
    type: "@user/INACTIVE_USER_SUCCESS",
  };
}

export function resetInactive() {
  return {
    type: "@user/INACTIVE_RESET",
  };
}

export function userFailure(message, reasons) {
  return {
    type: "@user/USER_FAILURE",
    payload: { message, reasons },
  };
}
