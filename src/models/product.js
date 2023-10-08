'use strict';
const { options } = require('joi');
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init(
    {
      product_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      image_url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { isInt: true, min: 0 },
      },
      desc: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Product',
      hooks: {
        beforeBulkCreate: (instances, options) => {
          if (instances.stock < 0) {
            throw new Error('stock cannot be below zero');
          }
        },
        afterBulkCreate: (instances, options) => {
          if (instances.stock < 0) {
            throw new Error('stock cannot be below zero');
          }
        },
      },
    }
  );
  return Product;
};
