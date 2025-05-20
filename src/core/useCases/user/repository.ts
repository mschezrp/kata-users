import EmailEntity from '../../entities/email';
import User from '../../entities/user';

export default class UserRepository {
  users: User[] = [];

  constructor() {}

  getAllUsers = () => this.users;

  addUser = (name: string, email: string, password: string) => {
    if (this.users.find((user) => user.email.equal(new EmailEntity(email)))) {
      throw new Error('User already exists');
    }

    const user = new User(User.randomId(), name, email, password);

    this.users.push(user);

    return user;
  };
}
