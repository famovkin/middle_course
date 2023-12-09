import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from '../../types/profile';
import { validateProfileData } from './validateProfileData';

const dataInit = {
  username: 'admin',
  first: 'Tolya',
  lastname: 'Fam',
  age: 28,
  country: Country.Russia,
  currency: Currency.RUB,
  city: 'Vladimir',
};

describe('validateProfileData.test', () => {
  test('success', async () => {
    const result = validateProfileData(dataInit);
    expect(result).toEqual([]);
  });

  test('without first name and last name', async () => {
    const result = validateProfileData({
      ...dataInit,
      lastname: '',
      first: '',
    });
    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test('incorrect age', async () => {
    const result = validateProfileData({ ...dataInit, age: undefined });
    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test('incorrect country', async () => {
    const result = validateProfileData({ ...dataInit, country: undefined });
    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
  });

  test('all incorrect', async () => {
    const result = validateProfileData({});
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });
});
