import { takeEvery, call, put, all } from 'redux-saga/effects';

import ShopActionTypes from './shop.type';

import {
  firestore,
  convertCollectionToShopData,
} from '../../firebase/firebase.utils';

import { fetchCollectionSuccess, fetchCollectionFailure } from './shop.action';

// saga workers
function* fetchCollectionAsync() {
  try {
    const collectionRef = firestore.collection('collection');
    const snapshot = yield collectionRef.get();
    const updatedCollection = yield call(convertCollectionToShopData, snapshot);
    yield put(fetchCollectionSuccess(updatedCollection));
  } catch (err) {
    yield put(fetchCollectionFailure(err.message));
  }
}

// saga watchers
function* fetchCollectionStart() {
  yield takeEvery(ShopActionTypes.FETCH_COLLECTION_START, fetchCollectionAsync);
}

export function* shopSagas() {
  yield all([call(fetchCollectionStart)]);
}
