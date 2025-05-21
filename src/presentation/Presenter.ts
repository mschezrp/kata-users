import { exit } from 'process';
import User from '../domain/core/entities/User';
import AddUser from '../domain/useCases/AddUser';
import DeleteAllUsers from '../domain/useCases/DeleteAllUsers';
import DeleteUser from '../domain/useCases/DeleteUser';
import GetAllUsers from '../domain/useCases/GetAllUsers';

export interface UserViewInterface {
  notify: (message: string) => void;
  prompt: (question: string) => Promise<string>;
  show: (message: string, title?: boolean) => void;
}

export default class UserPresenter {
  view: UserViewInterface;
  addUserCase: AddUser;
  getAllUsersCase: GetAllUsers;
  deleteUserCase: DeleteUser;
  deleteAllUsersCase: DeleteAllUsers;

  constructor(
    view: UserViewInterface,
    addUserCase: AddUser,
    getAllUsersCase: GetAllUsers,
    deleteUserCase: DeleteUser,
    deleteAllUsersCase: DeleteAllUsers,
  ) {
    this.view = view;
    this.addUserCase = addUserCase;
    this.getAllUsersCase = getAllUsersCase;
    this.deleteUserCase = deleteUserCase;
    this.deleteAllUsersCase = deleteAllUsersCase;
  }

  init = async () => {
    this.view.show('Welcome to the kata-users management system');

    while (true) {
      this.showMenu();
      const option = await this.view.prompt('Select an option: ');

      switch (option) {
        case '1': {
          try {
            this.view.show('Add a new user', true);
            await this.addUser();
            this.view.notify('User created successfully');
          } catch (error) {
            this.view.notify(`Something went wrong adding user: ${error}`);
          }

          break;
        }

        case '2': {
          this.view.show('List users', true);
          const users = this.getAllUsersCase.execute();
          this.showUsers(users);

          break;
        }

        case '3': {
          this.view.show('Delete user', true);
          const users = this.getAllUsersCase.execute();
          this.showUsers(users, true);
          const index = await this.view.prompt('Select an option: ');

          if (!index || isNaN(+index) || !users[+index]) {
            this.view.notify(`Invalid index`);
            continue;
          }

          try {
            this.deleteUser(users[+index]);
            this.view.notify('User deleted successfully');
          } catch (error) {
            this.view.notify(`Something went wrong deleting user: ${error}`);
          }

          break;
        }

        case '4': {
          this.view.show('Delete all users', true);

          try {
            this.deleteAllUsers();
            this.view.notify('All users deleted successfully');
          } catch (error) {
            this.view.notify(
              `Something went wrong deleting all users: ${error}`,
            );
          }

          break;
        }

        case '5':
          this.view.show('Goodbye', true);
          exit(0);

          break;

        default:
          this.view.show('Invalid option');
          break;
      }

      this.view.show('\n');
    }
  };

  addUser = async () => {
    const email = await this.view.prompt('Email: ');
    const name = await this.view.prompt('Name: ');
    const password = await this.view.prompt('Password: ');

    const user = new User('', name, email, password);

    this.addUserCase.execute(user);
  };

  deleteUser = (user: User) => {
    this.deleteUserCase.execute(user);
  };

  deleteAllUsers = () => {
    this.deleteAllUsersCase.execute();
  };

  showMenu = () => {
    this.view.show('1. Add user');
    this.view.show('2. List users');
    this.view.show('3. Delete user');
    this.view.show('4. Delete all');
    this.view.show('5. Exit');
  };

  showUsers = (users: User[], ordered?: boolean) => {
    if (users.length === 0) {
      this.view.notify('No users found');
    } else {
      users.map((user, index) =>
        this.view.show(
          `${ordered ? `${index}.` : '·'} ${user.name.value} (${user.email.value})`,
        ),
      );
    }
  };
}
