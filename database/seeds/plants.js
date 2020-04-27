exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('plants')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('plants').insert([
        {
          id: 1,
          common_name: 'Rose',
          scientific_name: 'Rosa',
        },
        {
          id: 2,
          common_name: 'Common daisy',
          scientific_name: 'Bellis perennis',
        },
        {
          id: 3,
          common_name: 'Tulip',
          scientific_name: 'Tulipa',
        },
      ]);
    });
};
