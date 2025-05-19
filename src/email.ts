interface Email {
  value: string;
}

export default class EmailEntity implements Email {
  value: string;

  private static readonly EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  constructor(text: string) {
    if (!text) {
      throw new Error('Text is required');
    }

    if (!EmailEntity.EMAIL_REGEX.test(text)) {
      throw new Error('Email is not valid');
    }

    this.value = text;
  }

  equal(other: Email): boolean {
    return this.value === other.value;
  }
}
