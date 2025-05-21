import AddUser from './AddUser';
import UserRepository from '../../../repositories/UserRepository';
import User from '../../core/entities/User';

describe('AddUser', () => {
  it('should throw an error if an user has the same email', () => {
    expect(() => {
      const userRepository = new UserRepository();
      const addUser = new AddUser(userRepository);

      const user1 = new User('', 'John Doe', 'john@doe.org', 'Password123');

      addUser.execute(user1);
      addUser.execute(user1);
    }).toThrow('User already exists');
  });
});
