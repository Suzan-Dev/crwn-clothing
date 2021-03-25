import CartActionType from './cart.type';
import cartReducer from './cart.reducer';

const initialState = {
  hidden: true,
  cartItem: [],
};

describe('Testing: cartReducer!', () => {
  test('should return initial state.', () => {
    expect(cartReducer(undefined, {})).toEqual(initialState);
  });

  test('should toggle hidden with ToggleHiddenCart action.', () => {
    expect(
      cartReducer(initialState, {
        type: CartActionType.TOGGLE_HIDDEN_CART,
      }).hidden
    ).toBeFalsy();
  });

  describe('Testing: addItem action!', () => {
    const mockCartItem = {
      id: 1,
      quantity: 2,
    };

    test('should increase quantity by 1 if the product already exists.', () => {
      const initialStateWithItems = {
        hidden: true,
        cartItem: [mockCartItem],
      };

      expect(
        cartReducer(initialStateWithItems, {
          type: CartActionType.ADD_ITEM,
          payload: mockCartItem,
        }).cartItem[0].quantity
      ).toBe(3);
    });

    test('should add product with quantity 1 if added product does not already exists.', () => {
      expect(
        cartReducer(initialState, {
          type: CartActionType.ADD_ITEM,
          payload: mockCartItem,
        }).cartItem[0].quantity
      ).toBe(1);
    });
  });

  describe('Testing: removeItem action!', () => {
    test('should decrease quantity by 1 if the product already exists.', () => {
      const mockCartItem = {
        id: 1,
        quantity: 2,
      };
      const initialStateWithItems = {
        hidden: true,
        cartItem: [mockCartItem],
      };

      expect(
        cartReducer(initialStateWithItems, {
          type: CartActionType.REMOVE_ITEM,
          payload: mockCartItem,
        }).cartItem[0].quantity
      ).toBe(1);
    });

    test('should remove product with quantity 1.', () => {
      const mockCartItem = {
        id: 2,
        quantity: 1,
      };
      const initialStateWithItems = {
        hidden: true,
        cartItem: [mockCartItem],
      };

      expect(
        cartReducer(initialStateWithItems, {
          type: CartActionType.REMOVE_ITEM,
          payload: mockCartItem,
        }).cartItem
      ).toEqual([]);
    });
  });

  test('should remove the item from cart.', () => {
    const mockCartItem = {
      id: 3,
      quantity: 10,
    };
    const initialStateWithItems = {
      hidden: true,
      cartItem: [mockCartItem],
    };

    expect(
      cartReducer(initialStateWithItems, {
        type: CartActionType.REMOVE_ITEM_FROM_CART,
        payload: mockCartItem,
      }).cartItem
    ).toEqual([]);
  });

  test('should remove all items from cart.', () => {
    const mockCartItemArr = [
      {
        id: 1,
        quantity: 10,
      },
      {
        id: 2,
        quantity: 5,
      },
    ];
    const initialStateWithItems = {
      hidden: true,
      cartItem: mockCartItemArr,
    };

    expect(
      cartReducer(initialStateWithItems, {
        type: CartActionType.CLEAR_CART,
      }).cartItem.length
    ).toBe(0);
  });
});
