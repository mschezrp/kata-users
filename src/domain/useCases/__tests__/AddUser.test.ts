import AddUser from '../AddUser';
import User from '../../core/entities/User';
import { vi } from 'vitest';
import UserRepository from '../../repositories/UserRepository';

describe('AddUser', () => {
  it('should throw an error if an user has the same email', () => {
    expect(() => {
      const user1 = new User('', 'John Doe', 'john@doe.org', 'Password123');

      const addUser = new AddUser({
        users: [user1],
        addUser: vi.fn().mockImplementation(function (
          this: UserRepository,
          user: User,
        ) {
          this.users.push(user);
        }),
        getAllUsers: vi.fn(),
        getUserByEmail: vi.fn().mockReturnValue(user1),
      });

      addUser.execute(user1);
    }).toThrow('User already exists');
  });
});
