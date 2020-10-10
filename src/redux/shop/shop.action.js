import ShopActionTypes from './shop.type';

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
