describe('Basicdetails.js', function () {
  it('should be greater than 10000', function () {
    const amount = new Amount();
    amount.total = 10000;

    expect(amount.total).toBe(10000);
  });

  it('should not be greater than 100000', function () {
    const amount = new Amount();
    amount.total = 10000;

    expect(amount.total).not.toBe(10000);
  });
});
