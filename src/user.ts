import Password from './password';
import Email from './email';
import Address from './address';

interface User {
  id: string;
  name: string;
  email: Email;
  password: Password;
  address?: Address;
}

export default class UserEntity implements User {
  id: string;
  name: string;
  email: Email;
  password: Password;
  address?: Address | undefined;

  static readonly randomId = () => {
    return Math.random().toString(36).substring(2, 15);
  };

  constructor(id: string, name: string, email: string, password: string) {
    if (!name || !email || !password) {
      throw new Error('All fields are required');
    }

    this.id = id || UserEntity.randomId();
    this.name = name;
    this.email = new Email(email);
    this.password = new Password(password);
    this.address = undefined;
  }

  setAddress(street: string, zipCode: string, city: string): void {
    const address = new Address(street, zipCode, city);
    this.address = address;
  }

  equal(other: User): boolean {
    return this.id === other.id;
  }
}
