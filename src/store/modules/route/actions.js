export function setRoute(name) {
  return {
    type: "@route/SET_ROUTE",
    payload: { name },
  };
}
