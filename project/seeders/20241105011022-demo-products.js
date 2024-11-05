'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('products', [
      {
        id: '01',
        name: 'Chicken Burger',
        price: 115,
        description: 'Ipsum ipsum clita erat amet dolor justo diam'
      },
      {
        id: '02',
        name: 'Chicken Burger',
        price: 115,
        description: 'Ipsum ipsum clita erat amet dolor justo diam'
      },
      {
        id: '03',
        name: 'Chicken Burger',
        price: 115,
        description: 'Ipsum ipsum clita erat amet dolor justo diam'
      },
      {
        id: '04',
        name: 'Chicken Burger',
        price: 115,
        description: 'Ipsum ipsum clita erat amet dolor justo diam'
      },
      {
        id: '05',
        name: 'Chicken Burger',
        price: 115,
        description: 'Ipsum ipsum clita erat amet dolor justo diam'
      },
      {
        id: '06',
        name: 'Chicken Burger',
        price: 115,
        description: 'Ipsum ipsum clita erat amet dolor justo diam'
      },
      {
        id: '07',
        name: 'Chicken Burger',
        price: 115,
        description: 'Ipsum ipsum clita erat amet dolor justo diam'
      },
      {
        id: '08',
        name: 'Chicken Burger',
        price: 115,
        description: 'Ipsum ipsum clita erat amet dolor justo diam'
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('products', null, {});
  }
};
