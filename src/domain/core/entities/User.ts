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

  constructor(
    id: string,
    name: string,
    email: string,
    password: string,
    street?: string,
    zipCode?: string,
    city?: string,
  ) {
    this.id = new Id(id);
    this.name = new Name(name);
    this.email = new Email(email);
    this.password = new Password(password);

    if (street && zipCode && city) {
      this.address = new Address(street, zipCode, city);
    }
  }

  equal(other: User): boolean {
    return this.id.equal(other.id);
  }
}
