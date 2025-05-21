import Name from '../Name';

describe('Name', () => {
  it('should throw an error if name is empty', () => {
    expect(() => new Name('')).toThrow('Name is required');
  });

  it('should return true for equal names', () => {
    const name1 = new Name('John Doe');
    const name2 = new Name('John Doe');

    expect(name1.equal(name2)).toBe(true);
  });
});
