import DeleteUser from '../DeleteUser';
import User from '../../core/entities/User';
import { vi } from 'vitest';
import UserRepository from '../../repositories/UserRepository';
import Email from '../../core/valueObjects/Email';

describe('DeleteUser', () => {
  it('should delete a user by email', () => {
    const user1 = new User('', 'John Doe', 'john@doe.org', 'Password123');

    const deleteUser = new DeleteUser({
      users: [user1],
      deleteAllUsers: vi.fn(),
      deleteUserByEmail: vi.fn().mockImplementation(function (
        this: UserRepository,
        email: Email,
      ) {
        const userIndex = this.users.findIndex((user) => user.email === email);
        if (userIndex !== -1) {
          this.users.splice(userIndex, 1);
        }
      }),
      addUser: vi.fn(),
      getAllUsers: vi.fn(),
      getUserByEmail: vi.fn(),
    });

    deleteUser.execute(user1);

    expect(deleteUser.repository.users).toHaveLength(0);
  });
});
