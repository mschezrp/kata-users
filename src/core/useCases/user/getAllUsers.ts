import UserRepository from './repository';

export class GetAllUsersCase {
  repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  execute() {
    const users = this.repository.getAllUsers();

    return users;
  }
}
