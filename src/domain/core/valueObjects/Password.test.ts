import Password from './Password';

describe('Password', () => {
  it('should throw an error if password is empty', () => {
    expect(() => new Password('')).toThrow('Password is required');
  });

  it('should throw an error if password does not meet criteria', () => {
    expect(() => new Password('qwerty')).toThrow(
      'Password must have at least 8 characters and contain at least one uppercase letter, one lowercase letter, and one number',
    );
  });

  it('should return true for equal password', () => {
    const password1 = new Password('Qwerty1234');
    const password2 = new Password('Qwerty1234');

    expect(password1.equal(password2)).toBe(true);
  });
});
