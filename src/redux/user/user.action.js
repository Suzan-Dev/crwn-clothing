import UserActionType from './user.type';

// sign in
export const googleSignInStart = () => ({
  type: UserActionType.GOOGLE_SIGN_IN_START,
});

export const emailSignInStart = (emailAndPassword) => ({
  type: UserActionType.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const signInSuccess = (user) => ({
  type: UserActionType.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (err) => ({
  type: UserActionType.SIGN_IN_FAILURE,
  payload: err,
});

// user persistance
export const checkUserSession = () => ({
  type: UserActionType.CHECK_USER_SESSION,
});

// sign out
export const signOutStart = () => ({
  type: UserActionType.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: UserActionType.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (err) => ({
  type: UserActionType.SIGN_OUT_FAILURE,
  payload: err,
});

// sign up
export const signUpStart = (emailPasswordAndDisplayName) => ({
  type: UserActionType.SIGN_UP_START,
  payload: emailPasswordAndDisplayName,
});

export const signUpSuccess = (emailAndPassword) => ({
  type: UserActionType.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const signUpFailure = (err) => ({
  type: UserActionType.SIGN_UP_FAILURE,
  payload: err,
});
