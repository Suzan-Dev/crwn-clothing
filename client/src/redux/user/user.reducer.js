import UserActionType from './user.type';

const INITIAL_STATE = {
  currentUser: null,
  errorMsg: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionType.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        errorMsg: null,
      };
    case UserActionType.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        errorMsg: null,
      };
    case UserActionType.SIGN_IN_FAILURE:
    case UserActionType.SIGN_OUT_FAILURE:
    case UserActionType.SIGN_UP_FAILURE:
      return {
        ...state,
        errorMsg: action.payload,
      };
    case UserActionType.SIGN_UP_SUCCESS:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default userReducer;
