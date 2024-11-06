'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('products', [
      {
        id: '1',
        name: 'Chicken Burger',
        price: 115,
        description: 'Ipsum ipsum clita erat amet dolor justo diam'
      },
      {
        id: '2',
        name: 'Chicken Burger',
        price: 115,
        description: 'Ipsum ipsum clita erat amet dolor justo diam'
      },
      {
        id: '3',
        name: 'Chicken Burger',
        price: 115,
        description: 'Ipsum ipsum clita erat amet dolor justo diam'
      },
      {
        id: '4',
        name: 'Chicken Burger',
        price: 115,
        description: 'Ipsum ipsum clita erat amet dolor justo diam'
      },
      {
        id: '5',
        name: 'Chicken Burger',
        price: 115,
        description: 'Ipsum ipsum clita erat amet dolor justo diam'
      },
      {
        id: '6',
        name: 'Chicken Burger',
        price: 115,
        description: 'Ipsum ipsum clita erat amet dolor justo diam'
      },
      {
        id: '7',
        name: 'Chicken Burger',
        price: 115,
        description: 'Ipsum ipsum clita erat amet dolor justo diam'
      },
      {
        id: '8',
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
