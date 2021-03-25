import directoryReducer, { INITIAL_STATE } from './directory.reducer';

describe('Testing: directoryReducer!', () => {
  test('should return initial state.', () => {
    expect(directoryReducer(undefined, {})).toEqual(INITIAL_STATE);
  });
});
