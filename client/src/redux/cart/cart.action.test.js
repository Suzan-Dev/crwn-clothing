import CartActionType from './cart.type';
import * as CartAction from './cart.action';

describe('Testing: ToggleHiddenCart action!', () => {
  test('should create ToggleHiddenCart action.', () => {
    expect(CartAction.ToggleHiddenCart()).toEqual({ type: CartActionType.TOGGLE_HIDDEN_CART });
  });
});

describe('Testing: addItem action!', () => {
  const mockItem = {
    id: 1,
  };

  test('should create addItem action.', () => {
    expect(CartAction.addItem(mockItem)).toEqual({ type: CartActionType.ADD_ITEM, payload: mockItem });
  });
});

describe('Testing: removeItem action!', () => {
  const mockItem = {
    id: 1,
  };

  test('should create removeItem action.', () => {
    expect(CartAction.removeItem(mockItem)).toEqual({ type: CartActionType.REMOVE_ITEM, payload: mockItem });
  });
});

describe('Testing: removeItemFromCart action!', () => {
  const mockItem = {
    id: 1,
  };

  test('should create removeItemFromCart action.', () => {
    expect(CartAction.removeItemFromCart(mockItem)).toEqual({
      type: CartActionType.REMOVE_ITEM_FROM_CART,
      payload: mockItem,
    });
  });
});

describe('Testing: clearCart action!', () => {
  test('should create clearCart action.', () => {
    expect(CartAction.clearCart()).toEqual({ type: CartActionType.CLEAR_CART });
  });
});
