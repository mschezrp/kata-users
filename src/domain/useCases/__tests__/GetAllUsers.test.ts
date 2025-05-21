import GetAllUsers from '../GetAllUsers';
import User from '../../core/entities/User';
import { vi } from 'vitest';
import UserRepository from '../../repositories/UserRepository';

describe('GetAllUsers', () => {
  it('should return all users', () => {
    const user1 = new User('', 'John Doe', 'john@doe.org', 'Password123');
    const getAllUsers = new GetAllUsers({
      users: [user1],
      addUser: vi.fn(),
      deleteAllUsers: vi.fn(),
      deleteUserByEmail: vi.fn(),
      getAllUsers: vi.fn().mockImplementation(function (this: UserRepository) {
        return this.users;
      }),
      getUserByEmail: vi.fn(),
    });

    const users = getAllUsers.execute();

    expect(users).toHaveLength(1);
  });
});
