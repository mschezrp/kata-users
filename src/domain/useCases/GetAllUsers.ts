import UserRepository from '../../repositories/UserRepository';

export default class GetAllUsers {
  repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  execute() {
    const users = this.repository.getAllUsers();

    return users;
  }
}
