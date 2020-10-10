import { all, put, call, takeLatest } from 'redux-saga/effects';

import UserActionType from '../user/user.type';

import { clearCart } from './cart.action';

// saga worker
function* clearCartOnSuccess() {
  yield put(clearCart());
}

// saga watcher
function* onSignOutSuccess() {
  yield takeLatest(UserActionType.SIGN_OUT_SUCCESS, clearCartOnSuccess);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
