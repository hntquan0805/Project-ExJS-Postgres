'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('cart_items', [
      {
        id: 1,
        cartId: 1,
        productId: 1,
        quantity: 1
      },
      {
        id: 2,
        cartId: 1,
        productId: 2,
        quantity: 2
      },
      {
        id: 3,
        cartId: 2,
        productId: 3,
        quantity: 3
      },
      {
        id: 4,
        cartId: 2,
        productId: 4,
        quantity: 4
      },
      {
        id: 5,
        cartId: 3,
        productId: 5,
        quantity: 5
      },
      {
        id: 6,
        cartId: 3,
        productId: 6,
        quantity: 6
      },
      {
        id: 7,
        cartId: 4,
        productId: 7,
        quantity: 7
      },
      {
        id: 8,
        cartId: 4,
        productId: 8,
        quantity: 8
      },
      {
        id: 9,
        cartId: 5,
        productId: 9,
        quantity: 9
      },
      {
        id: 10,
        cartId: 5,
        productId: 10,
        quantity: 10
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('cart_items', null, {});
  }
};
