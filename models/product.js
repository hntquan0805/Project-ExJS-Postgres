const { ARRAY } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    category: {
      type: ARRAY(DataTypes.STRING),
      allowNull: false
    }
  }, {
    tableName: 'products',
    timestamps: false
  });

  product.associate = (models) => {
    product.hasMany(models.CartItem, { foreignKey: 'productId' });
    product.hasMany(models.OrderItem, { foreignKey: 'productId' });
  };

  return product;
};