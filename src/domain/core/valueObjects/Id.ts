export default class Id {
  value: string;

  static readonly random = () => {
    return Math.random().toString(36).substring(2, 15);
  };

  constructor(value?: string) {
    this.value = value || Id.random();
  }

  equal(other: Id): boolean {
    return this.value === other.value;
  }
}
