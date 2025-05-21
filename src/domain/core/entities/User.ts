import Email from '../valueObjects/Email';
import Address from '../valueObjects/Address';
import Password from '../valueObjects/Password';
import Id from '../valueObjects/Id';
import Name from '../valueObjects/Name';

export default class User {
  id: Id;
  name: Name;
  email: Email;
  password: Password;
  address?: Address | undefined;

  constructor(id: string, name: string, email: string, password: string) {
    this.id = new Id(id);
    this.name = new Name(name);
    this.email = new Email(email);
    this.password = new Password(password);
    this.address = undefined;
  }

  setAddress(street: string, zipCode: string, city: string): void {
    const address = new Address(street, zipCode, city);
    this.address = address;
  }

  equal(other: User): boolean {
    return this.id.equal(other.id);
  }
}
