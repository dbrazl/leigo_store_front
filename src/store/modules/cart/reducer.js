import produce from "immer";
import _ from "lodash";

const INITIAL_STATE = {
  products: [],
  total: 0,
  amount: 0,
};

export default function cart(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@cart/ADD_TO_CART":
        let oneAdd = state.products.find(
          (item) => item.id === action.payload.item.id
        );

        add: {
          if (!!oneAdd && oneAdd.stock < oneAdd.amount + 1) break add;

          if (!!oneAdd) {
            oneAdd.amount++;
            const unionAdd = _.unionBy([oneAdd], state.products, "id");
            draft.products = _.orderBy(unionAdd, ["name"], ["asc"]);
            draft.total += action.payload.item.price;
            draft.amount = state.amount + 1;
            break add;
          }

          let toAdd = action.payload.item;
          toAdd.amount = 1;

          const unionAdd = _.unionBy([toAdd], state.products, "id");
          draft.products = _.orderBy(unionAdd, ["name"], ["asc"]);
          draft.total += action.payload.item.price;
          draft.amount = state.amount + 1;
        }
        break;

      case "@cart/REMOVE_ONE_FROM_CART":
        let oneRemove = state.products.find(
          (item) => item.id === action.payload.item.id
        );

        if (!!oneRemove && oneRemove.amount > 0) {
          oneRemove.amount--;

          if (oneRemove.amount === 0)
            draft.products = _.differenceBy(state.products, [oneRemove], "id");
          else {
            const unionRemoveOne = _.unionBy([oneRemove], state.products, "id");
            draft.products = _.orderBy(unionRemoveOne, ["name"], ["asc"]);
          }
        } else {
          draft.products = _.differenceBy(
            state.products,
            [action.payload.item],
            "id"
          );
        }

        if (state.total > 0) draft.total -= action.payload.item.price;
        if (state.amount > 0) draft.amount = state.amount - 1;
        break;

      case "@cart/REMOVE_FROM_CART":
        const one = state.products.find(
          (item) => item.id === action.payload.item.id
        );

        if (!!one) {
          draft.products = _.differenceBy(
            state.products,
            [action.payload.item],
            "id"
          );
          draft.total -= one.price * one.amount;
          draft.amount = state.amount - one.amount;
        }

        break;
      default:
    }
  });
}
