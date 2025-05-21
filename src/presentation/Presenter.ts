import User from '../domain/core/entities/User';
import AddUser from '../domain/useCases/AddUser';
import GetAllUsers from '../domain/useCases/GetAllUsers';

export interface UserPresenterInterface {
  loadName: () => Promise<string>;
  loadEmail: () => Promise<string>;
  loadPassword: () => Promise<string>;
}

export interface UserViewInterface {
  prompt: (question: string) => Promise<string>;
  show: (message: string) => void;
}

export default class UserPresenter implements UserPresenterInterface {
  view: UserViewInterface;
  addUser: AddUser;
  getAllUsers: GetAllUsers;

  constructor(
    view: UserViewInterface,
    addUser: AddUser,
    getAllUsers: GetAllUsers,
  ) {
    this.view = view;
    this.addUser = addUser;
    this.getAllUsers = getAllUsers;
  }

  init = async () => {
    this.view.show('Welcome to the Kata User Management System');

    while (true) {
      const users = this.getAllUsers.execute();

      if (users.length === 0) {
        this.view.show('No users found');
      } else {
        this.view.show(
          `List users: \n ${users.map((user) => `${user.name.value} (${user.email.value})`).join('\n')}\n`,
        );
      }

      try {
        await this.createUser();
      } catch (error) {
        this.view.show(`Something went wrong: ${error}`);
      }

      this.view.show('\n');
    }
  };

  createUser = async () => {
    const name = await this.loadName();
    const email = await this.loadEmail();
    const password = await this.loadPassword();

    const user = new User('', name, email, password);

    this.addUser.execute(user);

    this.view.show('User created successfully');
  };

  loadEmail = async () => {
    const email = await this.view.prompt('Email: ');
    return email;
  };

  loadName = async () => {
    const name = await this.view.prompt('Name: ');
    return name;
  };

  loadPassword = async () => {
    const password = await this.view.prompt('Password: ');
    return password;
  };
}
