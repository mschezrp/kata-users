import Email from '../Email';

describe('Email', () => {
  it('should throw an error if email is empty', () => {
    expect(() => new Email('')).toThrow('Email is required');
  });

  it('should throw an error if email is invalid', () => {
    expect(() => new Email('invalid-email')).toThrow('Email is not valid');
  });

  it('should return true for equal emails', () => {
    const email1 = new Email('username@domain.com');
    const email2 = new Email('username@domain.com');

    expect(email1.equal(email2)).toBe(true);
  });
});
