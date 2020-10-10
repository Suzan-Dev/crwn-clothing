import { takeLatest, put, call, all } from 'redux-saga/effects';

import UserActionType from './user.type';

import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
  signUpFailure,
} from './user.action';

import {
  auth,
  googleProvider,
  createUserProfileDoc,
  getCurrentUser,
} from '../../firebase/firebase.utils';

function* getSnapshotFromAuth(userAuth) {
  try {
    const userRef = yield call(createUserProfileDoc, userAuth);
    const snapshot = yield userRef.get();
    yield put(signInSuccess({ id: snapshot.id, ...snapshot.data() }));
  } catch (err) {
    yield put(signInFailure(err.message));
  }
}

// saga workers
function* googleSignIn() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromAuth(user);
  } catch (err) {
    yield put(signInFailure(err.message));
  }
}

function* emailSignIn({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromAuth(user);
  } catch (err) {
    yield put(signInFailure(err.message));
  }
}

function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) throw Error();
    yield getSnapshotFromAuth(userAuth);
  } catch (err) {
    yield put(signInFailure(err.message));
  }
}

function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (err) {
    yield put(signOutFailure(err));
  }
}

function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield call(createUserProfileDoc, user, { displayName });
    yield put(signUpSuccess({ email, password }));
  } catch (err) {
    yield put(signUpFailure(err));
  }
}

// saga watchers
function* onGoogleSignInStart() {
  yield takeLatest(UserActionType.GOOGLE_SIGN_IN_START, googleSignIn);
}

function* onEmailSignInStart() {
  yield takeLatest(UserActionType.EMAIL_SIGN_IN_START, emailSignIn);
}

function* onCheckUserSession() {
  yield takeLatest(UserActionType.CHECK_USER_SESSION, isUserAuthenticated);
}

function* onSignOutStart() {
  yield takeLatest(UserActionType.SIGN_OUT_START, signOut);
}

function* onSignUpStart() {
  yield takeLatest(UserActionType.SIGN_UP_START, signUp);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
  ]);
}
