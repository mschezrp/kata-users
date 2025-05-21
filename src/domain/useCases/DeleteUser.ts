import UserRepository from '../repositories/UserRepository';
import User from '../core/entities/User';

export default class DeleteUser {
  repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  execute(user: User): void {
    this.repository.deleteUserByEmail(user.email);
  }
}
