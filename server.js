const express = require('express');
const routes = require('./routes');

// import sequelize connection
const sequelize = require('./config/connection');

// import models
// calling the models here initializes the table in the mysql db
const Category = require('./models/Category');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database above, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
