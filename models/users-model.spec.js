describe('users model', function () {
  describe('test environment', function () {
    it('should use the testing environment', function () {
      expect(process.env.DB_ENV).toBe('testing');
    });
  });
});
