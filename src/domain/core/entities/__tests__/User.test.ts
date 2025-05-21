import User from '../User';
import Id from '../../valueObjects/Id';

describe('User', () => {
  it('should throw an error if name is empty', () => {
    expect(() => new User('', '', 'john@doe.org', 'Password123')).toThrow(
      'Name is required',
    );
  });

  it('should throw an error if email is empty', () => {
    expect(() => new User('', 'John Doe', '', 'Password123')).toThrow(
      'Email is required',
    );
  });

  it('should throw an error if password is empty', () => {
    expect(() => new User('', 'John Doe', 'john@doe.org', '')).toThrow(
      'Password is required',
    );
  });

  it('should return true for equal Users', () => {
    const id = Id.random();
    const user1 = new User(id, 'John Doe', 'john@doe.org', 'Password123');
    const user2 = new User(id, 'John Doe', 'john@doe.org', 'Password123');

    expect(user1.equal(user2)).toBe(true);
  });
});
