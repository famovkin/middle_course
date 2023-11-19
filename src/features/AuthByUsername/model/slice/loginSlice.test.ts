import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
  test('test set username', () => {
    const state: DeepPartial<LoginSchema> = { username: 'oldUsername' };
    expect(
      loginReducer(
        state as LoginSchema,
        loginActions.setUsername('newUsername'),
      ),
    ).toEqual({ username: 'newUsername' });
  });
  test('test set password', () => {
    const state: DeepPartial<LoginSchema> = { username: 'oldPassword' };
    expect(
      loginReducer(
        state as LoginSchema,
        loginActions.setUsername('newPassword'),
      ),
    ).toEqual({ username: 'newPassword' });
  });
});
