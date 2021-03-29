import UserActionType from './user.type';
import userReducer from './user.reducer';

const initialState = {
  currentUser: null,
  errorMsg: null,
};

describe('Testing: userReducer!', () => {
  test('should return initial state.', () => {
    expect(userReducer(undefined, {})).toEqual(initialState);
  });

  test('should set currentUser to payload on signInSuccess action.', () => {
    const mockUser = { id: 1, displayName: 'Suzan' };

    expect(
      userReducer(initialState, {
        type: UserActionType.SIGN_IN_SUCCESS,
        payload: mockUser,
      }).currentUser
    ).toEqual(mockUser);
  });

  test('should set currentUser to null on signOutSuccess action.', () => {
    expect(
      userReducer(initialState, {
        type: UserActionType.SIGN_OUT_SUCCESS,
      }).currentUser
    ).toBe(null);
  });

  test('should set errorMsg to payload to on all failure actions.', () => {
    const mockErrorMsg = 'ERROR!!!';

    expect(
      userReducer(initialState, {
        type: UserActionType.SIGN_IN_FAILURE,
        payload: mockErrorMsg,
      })
    ).toEqual({
      ...initialState,
      errorMsg: mockErrorMsg,
    });

    expect(
      userReducer(initialState, {
        type: UserActionType.SIGN_OUT_FAILURE,
        payload: mockErrorMsg,
      })
    ).toEqual({
      ...initialState,
      errorMsg: mockErrorMsg,
    });

    expect(
      userReducer(initialState, {
        type: UserActionType.SIGN_UP_FAILURE,
        payload: mockErrorMsg,
      })
    ).toEqual({
      ...initialState,
      errorMsg: mockErrorMsg,
    });
  });

  test('should set to initial state on signUpSuccess action.', () => {
    expect(
      userReducer(initialState, {
        type: UserActionType.SIGN_UP_SUCCESS,
      })
    ).toEqual(initialState);
  });
});
