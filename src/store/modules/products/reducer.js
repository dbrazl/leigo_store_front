import produce from "immer";
import _ from "lodash";

const INITIAL_STATE = {
  products: [],
  product: {
    name: "Nome do produto",
    description: "Descrição do produto",
    stock: 0,
    unit_price: 0,
    active: true,
    image: "",
    categories: [
      {
        category: "tag",
      },
    ],
  },
  page: 0,
  status: {
    loading: false,
  },
  error: {
    status: false,
    message: "",
    reasons: [],
  },
};

export default function products(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@products/INDEX_PRODUCTS_REQUEST":
        draft.status.loading = true;
        draft.error = INITIAL_STATE.error;
        break;

      case "@products/INDEX_PRODUCTS_SUCCESS":
        let unionIndex = _.unionBy(action.payload.body, state.products, "id");

        unionIndex.forEach((product) => {
          product.amount = 0;
        });

        draft.status.loading = false;
        draft.products = _.orderBy(
          unionIndex,
          ["name, category"],
          ["asc", "asc"]
        );
        draft.page = state.page + 1;
        break;

      case "@products/INDEX_ONE_PRODUCT_REQUEST":
        draft.status.loading = true;
        draft.error = INITIAL_STATE.error;
        break;

      case "@products/INDEX_ONE_PRODUCT_SUCCESS":
        draft.status.loading = false;
        draft.product = action.payload.body;
        break;

      case "@products/PRODUCTS_FAILURE":
        const { message, reasons } = action.payload;
        draft.status.loading = false;
        draft.error.status = true;
        draft.error.message = message;
        draft.error.reasons = reasons;
        break;

      case "@products/RESET_PAGE":
        draft.page = 0;
        break;

      case "@products/RESET_PRODUCTS":
        draft.products = [];
        break;

      default:
    }
  });
}
