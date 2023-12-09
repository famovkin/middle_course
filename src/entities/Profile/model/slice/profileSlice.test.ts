import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema, ValidateProfileError } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';

const dataInit = {
  username: 'admin',
  first: 'Tolya',
  lastname: 'Fam',
  age: 28,
  country: Country.Russia,
  currency: Currency.RUB,
  city: 'Vladimir',
};

describe('profileReducer.test', () => {
  test('set readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };
    expect(
      profileReducer(state as ProfileSchema, profileActions.setReadonly(true)),
    ).toEqual({ readonly: true });
  });

  test('cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = {
      data: dataInit,
      form: { username: '' },
    };
    expect(
      profileReducer(state as ProfileSchema, profileActions.cancelEdit()),
    ).toEqual({
      readonly: true,
      validateErrors: undefined,
      data: dataInit,
      form: dataInit,
    });
  });

  test('updateProfile edit', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: { username: 'prevName' },
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({ username: 'newName' }),
      ),
    ).toEqual({
      form: { username: 'newName' },
    });
  });

  test('updateProfile data', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: { username: 'prevName' },
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({ username: 'newName' }),
      ),
    ).toEqual({
      form: { username: 'newName' },
    });
  });

  test('test update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };
    expect(
      profileReducer(state as ProfileSchema, updateProfileData.pending),
    ).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });

  test('test update profile service fullfield', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(dataInit, ''),
      ),
    ).toEqual({
      isLoading: false,
      readonly: true,
      validateErrors: undefined,
      form: dataInit,
      data: dataInit,
    });
  });
});
