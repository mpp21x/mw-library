import {getNestedProp} from './get-nested-prop';

describe('get nested property', () => {
  it('exists', () => {
    const expectedValue = 'no';
    const sut = {
      a: {
        b: {
          c: expectedValue
        }
      }
    };

    expect(getNestedProp('a.b.c', sut)).toEqual(expectedValue);
  });
  it('exists', () => {
    const expectedValue = undefined;
    const sut = {};

    expect(getNestedProp('a.b.c', sut)).toEqual(expectedValue);
  });
});
