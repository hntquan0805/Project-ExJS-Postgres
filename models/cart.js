'use strict';

const User = require('./user'); 

module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.UUID,
      unique: true,
      allowNull: false,
    }
  }, {
    tableName: 'carts',
    timestamps: false,
  });

  Cart.associate = (models) => {
    Cart.belongsTo(models.User, { foreignKey: 'userId' });
    Cart.hasMany(models.CartItem, { foreignKey: 'cartId' });
  };

  return Cart;
};