import ShopActionTypes from './shop.type';
import * as shopActions from './shop.action';

describe('Testing: fetchCollectionStart action!', () => {
  test('should create fetchCollectionStart action', () => {
    expect(shopActions.fetchCollectionStart()).toEqual({ type: ShopActionTypes.FETCH_COLLECTION_START });
  });
});

describe('Testing: fetchCollectionSuccess action!', () => {
  const mockCollections = {
    hats: {
      id: 1,
    },
  };

  test('should create fetchCollectionSuccess action', () => {
    expect(shopActions.fetchCollectionSuccess(mockCollections)).toEqual({
      type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
      payload: mockCollections,
    });
  });
});

describe('Testing: fetchCollectionFailure action!', () => {
  const mockErrorMsg = 'ERROR!!!';

  test('should create fetchCollectionFailure action', () => {
    expect(shopActions.fetchCollectionFailure(mockErrorMsg)).toEqual({
      type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
      payload: mockErrorMsg,
    });
  });
});
