// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  // foreignKey is the name of the foreign key in the Product.js file!
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag)
// Product.belongsToMany( , {
// so, using "Tag.js" or "ProductTag.js" ?
// });

// Tags belongToMany Products (through ProductTag)
// so, using "Tag.js" or "ProductTag.js" ?


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
