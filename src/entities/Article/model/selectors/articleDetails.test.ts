import { StateSchema } from 'app/providers/StoreProvider';
import {
  getArticleDetailsData,
  getArticleDetailsIsLoading,
  getArticleDetailsError,
} from './articleDetails';

describe('getArticleDetailsData.test', () => {
  test('should return data', () => {
    const dataInit = {
      id: '1',
      title: 'Javascript news',
    };

    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data: dataInit,
      },
    };
    expect(getArticleDetailsData(state as StateSchema)).toEqual(dataInit);
  });
  test('should work with empty data', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
  });
});

describe('getArticleDetailsIsLoading.test', () => {
  test('should return isLoading state', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: true,
      },
    };
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
  });
  test('should work with empty state isLoading', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false);
  });
});

describe('getArticleDetailsError.error', () => {
  test('should return isLoading state', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error: 'error',
      },
    };
    expect(getArticleDetailsError(state as StateSchema)).toEqual('error');
  });
  test('should work with empty state error', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined);
  });
});
