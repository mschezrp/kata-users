import { AddUserCase } from './addUser';
import { GetAllUsersCase } from './getAllUsers';
import UserRepository from './repository';

describe('AddUserCase', () => {
  it('should throw an error if an user has the same email', () => {
    const userRepository = new UserRepository();
    const addUserCase = new AddUserCase(userRepository);
    const getAllUsersCase = new GetAllUsersCase(userRepository);

    addUserCase.execute('john', 'john@doe.org', 'Password123');

    const users = getAllUsersCase.execute();

    console.log('---', users);

    expect(users.length).toHaveLength(1);
  });
});
