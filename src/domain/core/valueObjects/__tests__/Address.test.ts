import Address from '../Address';

describe('Address', () => {
  it('should return true for equal emails', () => {
    const address1 = new Address('Long Street 123', '12345', 'City');
    const address2 = new Address('Long Street 123', '12345', 'City');

    expect(address1.equal(address2)).toBe(true);
  });
});
