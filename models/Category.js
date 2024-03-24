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
    // FIRST PARAMETER (defining columns)

    // (if you don't specify a primary key, sequelize will autocreate one, but best practice to do manually.)
    category_id: {
      // same as `id INT NOT NULL AUTO_INCREMENT PRIMARY KEY`
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      // same as `category_name TEXT NOT NULL`
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    // SECOND PARAMETER (db connection and misc settings)

    // link to db conection
    sequelize,
    // setting to false to remove `created_at` and `updated_at` fields
    timestamps: false,
    // prevent sequelize from renaming the table (otherwise auto plurals)
    freezeTableName: true,
    // converts all camelcase columns to underscored
    // ie, isPaperback -> is_paperback
    underscored: true,
    // name of the table
    modelName: 'category',
  }
);

// exporting the table
// import it to server.js to access it. calling it initializes the table in the mysql db
module.exports = Category;
