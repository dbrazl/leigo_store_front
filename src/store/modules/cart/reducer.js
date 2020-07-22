import produce from "immer";
import _ from "loadash";

const INITIAL_STATE = {
  products: [],
};

export default function cart(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@cart/ADD_TO_CART":
        const one = state.products.find(
          (item) => item.id === action.payload.item.id
        );

        if (!!one) {
          one.amount++;
          const unionAdd = _.unionBy([one], state.products, "id");
          draft.products = _.orderBy(unionAdd, ["name"], ["asc"]);
        } else {
          const unionAdd = _.unionBy(
            [action.payload.item],
            state.products,
            "id"
          );
          draft.products = _.orderBy(unionAdd, ["name"], ["asc"]);
        }
        break;

      case "@cart/REMOVE_ONE_FROM_CART":
        const one = state.products.find(
          (item) => item.id === action.payload.item.id
        );

        if (!!one) {
          one.amount--;
          const unionRemoveOne = _.unionBy([one], state.products, "id");
          draft.products = _.orderBy(unionRemoveOne, ["name"], ["asc"]);
        } else {
          const unionRemoveOne = _.unionBy(
            [action.payload.item],
            state.products,
            "id"
          );
          draft.products = _.orderBy(unionRemoveOne, ["name"], ["asc"]);
        }
        break;

      case "@cart/REMOVE_FROM_CART":
        const one = state.products.find(
          (item) => item.id === action.payload.item.id
        );

        if (!!one)
          draft.products = _.differenceBy(
            state.products,
            [action.payload.item],
            "id"
          );
        break;
      default:
    }
  });
}
