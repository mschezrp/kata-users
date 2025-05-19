interface Password {
  value: string;
}

export default class PasswordEntity implements Password {
  value: string;

  private static readonly PASSWORD_REGEX =
    /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$/;

  constructor(value: string) {
    if (!value) {
      throw new Error('Text is required');
    }

    if (!PasswordEntity.PASSWORD_REGEX.test(value)) {
      throw new Error(
        'Password must have at least 8 characters and contain at least one uppercase letter, one lowercase letter, and one number',
      );
    }

    this.value = value;
  }

  equal(other: Password): boolean {
    return this.value === other.value;
  }
}
