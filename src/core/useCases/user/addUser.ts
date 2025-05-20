import UserRepository from './repository';

export class AddUserCase {
  repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  execute(name: string, email: string, password: string) {
    const user = this.repository.addUser(name, email, password);

    return user;
  }
}
