import React from 'react';
import { mount } from '../../setupTests';
import { combineReducers, createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ShopPage } from './shop.component';

export const createMockStore = ({ state, reducers }) => {
  const store = createStore(combineReducers(reducers), state);
  return {
    ...store,
    persistor: {
      persist: () => null,
    },
  };
};

describe('Testing: ShopPage component!', () => {
  let wrapper;
  let mockFetchCollectionStart;
  let store;

  beforeEach(() => {
    const mockReducer = (
      state = {
        isFetching: true,
      },
      action
    ) => state;

    const mockState = {
      shop: {
        isFetching: true,
      },
    };

    mockFetchCollectionStart = jest.fn();

    store = createMockStore({
      state: mockState,
      reducers: { shop: mockReducer },
    });

    const mockMatch = {
      path: '',
    };

    const mockProps = {
      match: mockMatch,
      fetchCollectionStart: mockFetchCollectionStart,
    };

    wrapper = mount(
      <BrowserRouter>
        <Provider store={store}>
          <ShopPage {...mockProps} />
        </Provider>
      </BrowserRouter>
    );
  });

  test('should render ShopPage component.', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  test('should call fetchCollectionStart on mount.', () => {
    expect(mockFetchCollectionStart).toHaveBeenCalled();
  });
});
