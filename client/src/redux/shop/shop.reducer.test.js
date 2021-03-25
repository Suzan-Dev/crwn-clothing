import ShopActionTypes from './shop.type';
import shopReducer from './shop.reducer';

const initialState = {
  collections: null,
  isFetching: false,
  errorMessage: undefined,
};

describe('Testing: shopReducer!', () => {
  test('should return initial state.', () => {
    expect(shopReducer(undefined, {})).toEqual(initialState);
  });

  test('should set isFetching to true if is fetchCollectionStart action.', () => {
    expect(
      shopReducer(initialState, {
        type: ShopActionTypes.FETCH_COLLECTION_START,
      }).isFetching
    ).toBeTruthy();
  });

  test('should set isFetching to false & collections to payload if is fetchCollectionSuccess action.', () => {
    const mockCollections = [{ id: 1 }, { id: 2 }];
    expect(
      shopReducer(initialState, {
        type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
        payload: mockCollections,
      })
    ).toEqual({
      ...initialState,
      collections: mockCollections,
    });
  });

  test('should set isFetching to false & errorMessage to payload if is fetchCollectionFailure action.', () => {
    const mockErrorMsg = 'ERROR!!!';
    expect(
      shopReducer(initialState, {
        type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
        payload: mockErrorMsg,
      })
    ).toEqual({
      ...initialState,
      errorMessage: mockErrorMsg,
    });
  });
});
