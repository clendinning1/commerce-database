1. build db
2. You'll need to execute association methods on your Sequelize models to create the following relationships between them:

Product belongs to Category, and Category has many Product models, as a category can have multiple products but a product can only belong to one category.

Product belongs to many Tag models, and Tag belongs to many Product models. Allow products to have multiple tags and tags to have many products by using the ProductTag through model.

Hint: Make sure you set up foreign key relationships that match the column we created in the respective models.

3. Fill out the unfinished routes in `product-routes.js`, `tag-routes.js`, and `category-routes.js` to CRUD via sequelize models
4. seed db
5. Create the code needed in `server.js` to sync the Sequelize models to the MySQL database on server start.