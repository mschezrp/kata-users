export default class Name {
  value: string;

  constructor(value: string) {
    if (!value) {
      throw new Error('Name is required');
    }

    this.value = value;
  }

  equal(other: Name): boolean {
    return this.value === other.value;
  }
}
