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
          h2o_frequency: 1.5,
        },
        {
          id: 2,
          common_name: 'Common daisy',
          scientific_name: 'Bellis perennis',
          h2o_frequency: 4.5,
        },
        {
          id: 3,
          common_name: 'Tulip',
          scientific_name: 'Tulipa',
          h2o_frequency: 3.5,
        },
      ]);
    });
};
