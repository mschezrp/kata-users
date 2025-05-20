import { AddUserCase } from './addUser';
import UserRepository from './repository';

describe('AddUserCase', () => {
  it('should throw an error if an user has the same email', () => {
    expect(() => {
      const userRepository = new UserRepository();
      const addUserCase = new AddUserCase(userRepository);

      addUserCase.execute('john', 'john@doe.org', 'Password123');
      addUserCase.execute('john', 'john@doe.org', 'Password123');
    }).toThrow('User already exists');
  });
});
