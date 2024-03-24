// importing Model and DataTypes from our ORM sequelize
const { Model, DataTypes } = require('sequelize');
// importing sequelize from connection.js
const sequelize = require('../config/connection.js');

// creating a new Sequelize model for Category
// extending the Model means it's inheriting the Model class (which we import frm Sequelize)
class Category extends Model { }

// don't have anything in the class when we first define it,
// but then we use the .init method after the class.
// .init method is from Model{}. it's inheritance. 

Category.init(
  {
    // first parameter
    // define columns
  },
  {
    // second parameter
    // link to db conection
    sequelize,
    // setting to false to remove `created_at` and `updated_at` fields
    timestamps: false,
    // "If freezeTableName is true, sequelize will not try to alter the DAO name to get the table name. Otherwise, the dao name will be pluralized."
    // ?? i think it automatically makes every column and/or table name plural unless freezeTableName is true, but unsure
    freezeTableName: true,
    // converts all camelcase columns to underscored
    // ie, isPaperback -> is_paperback
    underscored: true,
    // name of the table
    modelName: 'category',
  }
);

// exporting the table
module.exports = Category;
