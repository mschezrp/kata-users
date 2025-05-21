import UserRepository from '../../../repositories/UserRepository';
import User from '../../core/entities/User';

export default class AddUser {
  repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  execute(user: User): void {
    if (this.repository.getUserByEmail(user.email)) {
      throw new Error('User already exists');
    }

    this.repository.addUser(user);
  }
}
