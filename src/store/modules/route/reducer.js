import produce from "immer";

const INITIAL_STATE = {
  route: "Principal",
};

export default function route(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@route/SET_ROUTE":
        const { name } = action.payload;
        draft.route = name;
        break;

      default:
    }
  });
}
