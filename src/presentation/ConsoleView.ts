import { UserViewInterface } from './Presenter';
import readline from 'readline';

export default class ConsoleView implements UserViewInterface {
  prompt = async (question: string) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    return new Promise<string>((resolve) => {
      rl.question(question, (value) => {
        resolve(value);

        rl.close();
      });
    });
  };

  show = (message: string) => {
    console.log(message);
  };
}
