import DeleteAllUsers from '../DeleteAllUsers';
import User from '../../core/entities/User';
import { vi } from 'vitest';
import UserRepository from '../../repositories/UserRepository';

describe('DeleteAllUsers', () => {
  it('should delete a user by email', () => {
    const user1 = new User('', 'John Doe', 'john@doe.org', 'Password123');

    const deleteUser = new DeleteAllUsers({
      users: [user1],
      deleteAllUsers: vi.fn().mockImplementation(function (
        this: UserRepository,
      ) {
        this.users = [];
      }),
      deleteUserByEmail: vi.fn(),
      addUser: vi.fn(),
      getAllUsers: vi.fn(),
      getUserByEmail: vi.fn(),
    });

    deleteUser.execute();

    expect(deleteUser.repository.users).toHaveLength(0);
  });
});
