interface Address {
  street: string;
  zipCode: string;
  city: string;
}

export default class AddressEntity implements Address {
  street: string;
  zipCode: string;
  city: string;

  constructor(street: string, zipCode: string, city: string) {
    if (!street || !zipCode || !city) {
      throw new Error('All fields are required');
    }

    this.street = street;
    this.zipCode = zipCode;
    this.city = city;
  }

  equal(other: Address): boolean {
    return (
      this.street === other.street &&
      this.zipCode === other.zipCode &&
      this.city === other.city
    );
  }
}
