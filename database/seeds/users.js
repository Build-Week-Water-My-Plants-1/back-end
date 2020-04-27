exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          username: 'david',
          password: '123',
          phone_number: '(123)456-7810',
        },
        {
          id: 2,
          username: 'james',
          password: '123',
          phone_number: '(098)234-4321',
        },
        {
          id: 3,
          username: 'alex',
          password: '123',
          phone_number: '(123)123-4567',
        },
      ]);
    });
};
