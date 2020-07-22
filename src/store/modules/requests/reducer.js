import produce from "immer";
import _ from "lodash";

const INITIAL_STATE = {
  requests: [],
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

export default function requests(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@requests/INDEX_REQUESTS_REQUEST":
        draft.status.loading = true;
        draft.error = INITIAL_STATE.error;
        break;

      case "@requests/INDEX_REQUESTS_SUCCESS":
        const unionIndex = _.unionBy(action.payload.body, state.requests, "id");
        draft.status.loading = false;
        draft.requests = _.orderBy(unionIndex, ["date"], ["desc"]);
        draft.page = state.page + 1;
        break;

      case "@requests/REQUESTS_FAILURE":
        const { message, reasons } = action.payload;
        draft.status.loading = false;
        draft.error.status = true;
        draft.error.message = message;
        draft.error.reasons = reasons;
        break;

      case "@requests/RESET_REQUESTS":
        draft.requests = [];
        break;

      case "@requests/RESET_PAGE":
        draft.page = 0;
        break;

      default:
    }
  });
}
