import ShopActionTypes from './shop.type';

import {
  firestore,
  convertCollectionToShopData,
} from '../../firebase/firebase.utils';

export const fetchCollectionStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTION_START,
});

export const fetchCollectionSuccess = (collections) => ({
  type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
  payload: collections,
});

export const fetchCollectionFailure = (errorMsg) => ({
  type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
  payload: errorMsg,
});

export const fetchCollectionStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection('collection');
    dispatch(fetchCollectionStart());

    // Observer Pattern
    collectionRef
      .get()
      .then(async (snapshot) => {
        const updatedCollection = convertCollectionToShopData(snapshot);
        dispatch(fetchCollectionSuccess(updatedCollection));
      })
      .catch((err) => dispatch(fetchCollectionFailure(err.message)));
  };
};
