import { takeEvery, put, call } from 'redux-saga/effects';
import ShopActionTypes from './shop.type';
import { fetchCollectionStart, fetchCollectionAsync } from './shop.saga';
import { convertCollectionToShopData, firestore } from '../../firebase/firebase.utils';
import { fetchCollectionFailure, fetchCollectionSuccess } from './shop.action';

describe('Testing: fetchCollectionStart watcher saga!', () => {
  test('should trigger on FETCH_COLLECTION_START.', () => {
    const generator = fetchCollectionStart();
    expect(generator.next().value).toEqual(
      takeEvery(ShopActionTypes.FETCH_COLLECTION_START, fetchCollectionAsync)
    );
  });
});

describe('Testing: fetchCollectionAsync worker saga!', () => {
  const generator = fetchCollectionAsync();

  test('should call firestore collection.', () => {
    const getCollection = jest.spyOn(firestore, 'collection');
    generator.next();
    expect(getCollection).toHaveBeenCalled();
  });

  test('should call convertCollectionsSnapshot saga.', () => {
    const mockSnapshot = {};
    expect(generator.next(mockSnapshot).value).toEqual(call(convertCollectionToShopData, mockSnapshot));
  });

  test('should fire fetchCollectionsSuccess if collectionsMap is successful.', () => {
    const mockCollectionsMap = {
      hats: { id: 1 },
    };

    expect(generator.next(mockCollectionsMap).value).toEqual(put(fetchCollectionSuccess(mockCollectionsMap)));
  });

  // test('should fire fetchCollectionsFailure if get collection fails at any point.', () => {
  //   const mockErrorMsg = 'ERROR!!!';

  //   const newGenerator = fetchCollectionAsync();
  //   newGenerator.next();
  //   expect(newGenerator.throw({ message: mockErrorMsg }).value).toEqual(
  //     put(fetchCollectionFailure(mockErrorMsg))
  //   );
  // });
});
