'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('products', [
      {
      id: '1',
      name: 'Apple',
      price: 1.99,
      description: 'Fresh and juicy apple'
      },
      {
      id: '2',
      name: 'Banana',
      price: 0.99,
      description: 'Sweet and nutritious banana'
      },
      {
      id: '3',
      name: 'Orange',
      price: 1.49,
      description: 'Citrusy and refreshing orange'
      },
      {
      id: '4',
      name: 'Grapes',
      price: 2.99,
      description: 'Plump and delicious grapes'
      },
      {
      id: '5',
      name: 'Watermelon',
      price: 4.99,
      description: 'Juicy and hydrating watermelon'
      },
      {
      id: '6',
      name: 'Strawberries',
      price: 3.49,
      description: 'Sweet and tangy strawberries'
      },
      {
      id: '7',
      name: 'Pineapple',
      price: 2.99,
      description: 'Tropical and refreshing pineapple'
      },
      {
      id: '8',
      name: 'Mango',
      price: 2.49,
      description: 'Exotic and flavorful mango'
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('products', null, {});
  }
};
