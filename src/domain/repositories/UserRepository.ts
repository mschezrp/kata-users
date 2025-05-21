import Email from '../core/valueObjects/Email';
import User from '../core/entities/User';

export default class UserRepository {
  users: User[] = [];

  constructor() {}

  addUser = (user: User) => {
    this.users.push(user);
  };

  deleteAllUsers = () => {
    this.users = [];
  };

  deleteUserByEmail = (email: Email) => {
    const userIndex = this.users.findIndex((user) => user.email.equal(email));

    if (userIndex !== -1) {
      this.users.splice(userIndex, 1);
    }
  };

  getAllUsers = () => this.users;

  getUserByEmail = (email: Email) => {
    const user = this.users.find((user) => user.email.equal(email));

    return user;
  };
}
