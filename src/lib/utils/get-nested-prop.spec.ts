import {getNestedProp} from './get-nested-prop';

describe('get nested property', () => {
  it('exists', () => {
    const expected = 'no';
    const sut = {
      a: {
        b: {
          c: expected
        }
      }
    };

    expect(getNestedProp('a.b.c', sut)).toEqual(expected);
  });
  it('exists', () => {
    const expected = undefined;
    const sut = {};

    expect(getNestedProp('a.b.c', sut)).toEqual(expected);
  });
});
