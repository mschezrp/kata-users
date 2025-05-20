import User from './user';

describe('User', () => {
  it('should throw an error if name is empty', () => {
    expect(
      () => new User(User.randomId(), '', 'john@doe.org', 'Password123'),
    ).toThrow('All fields are required');
  });

  it('should throw an error if email is empty', () => {
    expect(
      () => new User(User.randomId(), 'John Doe', '', 'Password123'),
    ).toThrow('All fields are required');
  });

  it('should throw an error if password is empty', () => {
    expect(
      () => new User(User.randomId(), 'John Doe', 'john@doe.org', ''),
    ).toThrow('All fields are required');
  });

  it('should return true for equal Users', () => {
    const id = User.randomId();
    const user1 = new User(id, 'John Doe', 'john@doe.org', 'Password123');
    const user2 = new User(id, 'John Doe', 'john@doe.org', 'Password123');

    expect(user1.equal(user2)).toBe(true);
  });
});
