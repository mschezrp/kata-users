import GetAllUsers from './GetAllUsers';
import UserRepository from '../../../repositories/UserRepository';
import User from '../../core/entities/User';
import { vi } from 'vitest';

describe('GetAllUsers', () => {
  it('should return all users', () => {
    const userRepository = new UserRepository();
    const getAllUsers = new GetAllUsers(userRepository);
    const user1 = new User('', 'John Doe', 'john@doe.org', 'Password123');

    vi.spyOn(userRepository, 'getAllUsers').mockReturnValue([user1]);

    const users = getAllUsers.execute();

    expect(users).toHaveLength(1);
  });
});
