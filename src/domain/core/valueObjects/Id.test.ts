import Id from './Id';

describe('Id', () => {
  it('should return true for equal ids', () => {
    const id1 = new Id('Password123');
    const id2 = new Id('Password123');

    expect(id1.equal(id2)).toBe(true);
  });

  it('should return false for different ids', () => {
    const id1 = new Id('Password123');
    const id2 = new Id('Qwerty123');

    expect(id1.equal(id2)).toBe(false);
  });
});
