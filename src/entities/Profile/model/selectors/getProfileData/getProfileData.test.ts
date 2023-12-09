import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
  test('should return state', () => {
    const dataInit = {
      username: 'admin',
      first: 'Tolya',
      lastname: 'Fam',
      age: 28,
      country: Country.Russia,
      currency: Currency.RUB,
      city: 'Vladimir',
    };

    const state: DeepPartial<StateSchema> = {
      profile: {
        data: dataInit,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(dataInit);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
