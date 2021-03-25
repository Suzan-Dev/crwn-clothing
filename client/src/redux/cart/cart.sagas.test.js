import { put, takeLatest } from 'redux-saga/effects';
import UserActionType from '../user/user.type';
import { clearCart } from './cart.action';
import { onSignOutSuccess, clearCartOnSuccess } from './cart.sagas';

// watcher
describe('Testing: onSignOutSuccess watcher saga!', () => {
  test('should trigger on SIGN_OUT_SUCCESS.', () => {
    const generator = onSignOutSuccess();
    expect(generator.next().value).toEqual(takeLatest(UserActionType.SIGN_OUT_SUCCESS, clearCartOnSuccess));
  });
});

// worker
describe('Testing: clearCartOnSuccess worker saga!', () => {
  test('should fire clearCart action.', () => {
    const generator = clearCartOnSuccess();
    expect(generator.next().value).toEqual(put(clearCart()));
  });
});
