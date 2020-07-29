import produce from "immer";

const INITIAL_STATE = {
  token: null,
  status: {
    loading: false,
    signed: false,
  },
  error: {
    status: false,
    message: "",
    reasons: [],
  },
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@auth/SIGN_IN_REQUEST":
        draft.token = null;
        draft.status.loading = true;
        draft.error = INITIAL_STATE.error;
        break;

      case "@auth/SIGN_IN_SUCCESS":
        draft.token = action.payload.body.token;
        draft.status.loading = false;
        draft.status.signed = true;
        break;

      case "@auth/SIGN_UP_REQUEST":
        draft.status.loading = true;
        draft.error = INITIAL_STATE.error;
        break;

      case "@auth/SIGN_UP_SUCCESS":
        draft.status.loading = false;
        break;

      case "@auth/RESTORE_ACCOUNT_REQUEST":
        draft.status.loading = true;
        draft.error = INITIAL_STATE.error;
        break;

      case "@auth/RESTORE_ACCOUNT_SUCCESS":
        draft.status.loading = false;
        break;

      case "@user/INACTIVE_RESET":
        draft.token = null;
        draft.status.signed = false;
        break;

      case "@auth/SIGN_OUT":
        draft.token = null;
        draft.status.signed = false;
        break;

      case "@auth/SIGN_FAILURE":
        const { message, reasons } = action.payload;
        draft.status.loading = false;
        draft.error.status = false;
        draft.error.message = message;
        draft.error.reasons = reasons;
        break;

      default:
    }
  });
}
