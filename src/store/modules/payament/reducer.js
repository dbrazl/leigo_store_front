import produce from "immer";
import _ from "lodash";

const INITIAL_STATE = {
  payaments: [],
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

export default function payament(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@payament/INDEX_PAYAMENTS_REQUEST":
        draft.status.loading = true;
        draft.error = INITIAL_STATE.error;
        break;

      case "@payament/INDEX_PAYAMENTS_SUCCESS":
        const indexPayaments = _.unionBy(
          state.payaments,
          action.payload.body,
          "id"
        );
        draft.payaments = _.orderBy(indexPayaments, ["id"], ["desc"]);
        draft.status.loading = false;
        draft.page = state.page + 1;
        break;

      case "@payament/SEND_CREDIT_CARD_PAYAMENT_REQUEST":
        draft.status.loading = true;
        draft.error = INITIAL_STATE.error;
        break;

      case "@payament/SEND_CREDIT_CARD_PAYAMENT_SUCCESS":
        draft.status.loading = false;
        break;

      case "@payament/SEND_BILLET_PAYAMENT_REQUEST":
        draft.status.loading = true;
        draft.error = INITIAL_STATE.error;
        break;

      case "@payament/SEND_BILLET_PAYAMENT_SUCCESS":
        draft.status.loading = false;
        break;

      case "@payament/PAYAMENT_FAILURE":
        const { message, reasons } = action.payload;
        draft.status.loading = false;
        draft.error.status = false;
        draft.error.message = message;
        draft.error.reasons = reasons;
        break;

      case "@payament/RESET_PAGE":
        draft.page = 0;
        break;

      case "@payament/RESET_PAYAMENTS":
        draft.payaments = [];
        break;

      default:
    }
  });
}
