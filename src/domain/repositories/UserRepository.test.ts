import User from '../core/entities/User';
import UserRepository from './UserRepository';

describe('Repository', () => {
  it('should return empty users', () => {
    const userRepository = new UserRepository();

    expect(userRepository.getAllUsers()).toHaveLength(0);
  });

  it('should add an user', () => {
    const userRepository = new UserRepository();

    const user1 = new User('', 'John Doe', 'john@doe.org', 'Password123');

    userRepository.addUser(user1);

    expect(userRepository.getAllUsers()).toHaveLength(1);
  });

  it('should return one user by email', () => {
    const userRepository = new UserRepository();

    const user1 = new User('', 'John Doe', 'john@doe.org', 'Password123');

    userRepository.addUser(user1);

    expect(userRepository.getUserByEmail(user1.email)).toBeTruthy();
  });
});
