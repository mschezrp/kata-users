import UserRepository from './domain/repositories/UserRepository';
import AddUser from './domain/useCases/AddUser';
import DeleteAllUsers from './domain/useCases/DeleteAllUsers';
import DeleteUser from './domain/useCases/DeleteAllUsers';
import GetAllUsers from './domain/useCases/GetAllUsers';
import ConsoleView from './presentation/ConsoleView';
import UserPresenter from './presentation/Presenter';

export default class CompositionRoot {
  static provideUserPresenter(): UserPresenter {
    const view = new ConsoleView();
    const userRepository = new UserRepository();
    const addUser = new AddUser(userRepository);
    const deleteUser = new DeleteUser(userRepository);
    const deleteAllUsers = new DeleteAllUsers(userRepository);
    const getAllUsers = new GetAllUsers(userRepository);

    return new UserPresenter(
      view,
      addUser,
      getAllUsers,
      deleteUser,
      deleteAllUsers,
    );
  }
}
