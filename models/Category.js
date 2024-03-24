// importing Model and DataTypes from our ORM sequelize
const { Model, DataTypes } = require('sequelize');
// importing sequelize from connection.js
const sequelize = require('../config/connection.js');

// creating a new Sequelize model for Category
// extending the Model means it's inheriting the Model class (which we import frm Sequelize)
class Category extends Model {}

// don't have anything in the class when we first define it,
// but then we use the .init method after the class.
// .init method is from Model{}. it's inheritance. 

Category.init(
  {
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
