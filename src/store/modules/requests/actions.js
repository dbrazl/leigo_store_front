export function indexRequestsRequest() {
  return {
    type: "@requests/INDEX_REQUESTS_REQUEST",
  };
}

export function indexRequestsSuccess(body) {
  return {
    type: "@requests/INDEX_REQUESTS_SUCCESS",
    payload: { body },
  };
}

export function requestsFailure(message, reasons) {
  return {
    type: "@requests/REQUESTS_FAILURE",
    payload: { message, reasons },
  };
}

export function resetRequests() {
  return {
    type: "@requests/RESET_REQUESTS",
  };
}

export function resetPage() {
  return {
    type: "@requests/RESET_PAGE",
  };
}
