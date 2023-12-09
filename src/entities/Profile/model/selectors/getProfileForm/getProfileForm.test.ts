import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
  test('should return form state', () => {
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
        form: dataInit,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(dataInit);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
