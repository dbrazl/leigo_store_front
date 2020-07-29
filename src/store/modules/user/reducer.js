import produce from "immer";

const INITIAL_STATE = {
  profile: {
    name: "",
    username: "",
    email: "",
    avatar: "",
  },
  status: {
    loading: false,
    inactive: false,
  },
  error: {
    status: false,
    message: "",
    reasons: [],
  },
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@user/UPDATE_AVATAR_REQUEST":
        draft.status.loading = true;
        draft.error = INITIAL_STATE.error;
        break;

      case "@user/UPDATE_AVATAR_SUCCESS":
        draft.status.loading = false;
        draft.profile.avatar = action.payload.body.uri;
        break;

      case "@auth/SIGN_IN_SUCCESS":
        const { name, username, email, avatar } = action.payload.body;
        draft.profile.name = name;
        draft.profile.username = username;
        draft.profile.email = email;
        draft.profile.avatar = avatar;
        break;

      case "@user/UPDATE_USER_REQUEST":
        draft.status.loading = true;
        draft.error = INITIAL_STATE.error;
        break;

      case "@user/UPDATE_USER_SUCCESS":
        draft.status.loading = false;
        draft.profile.name = action.payload.body.name;
        draft.profile.username = action.payload.body.username;
        draft.profile.email = action.payload.body.email;
        break;

      case "@user/INACTIVE_USER_REQUEST":
        draft.status.loading = true;
        draft.error = INITIAL_STATE.error;
        break;

      case "@user/INACTIVE_USER_SUCCESS":
        draft.status.loading = false;
        draft.status.inactive = true;
        draft.profile = INITIAL_STATE.profile;
        break;

      case "@auth/SIGN_OUT":
        draft.profile = INITIAL_STATE.profile;
        break;

      case "@user/USER_FAILURE":
        const { message, reasons } = action.payload;
        draft.status.loading = false;
        draft.status.error = true;
        draft.error.message = message;
        draft.error.reasons = reasons;
        break;

      case "@user/INACTIVE_RESET":
        draft.status.inactive = false;
        break;

      default:
    }
  });
}
