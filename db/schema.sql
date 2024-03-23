-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

USE ecommerce_db;



-- TABLES

CREATE TABLE Category (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    category_name TEXT NOT NULL
);

CREATE TABLE Product (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_name TEXT NOT NULL,
    price DECIMAL NOT NULL,
    -- CODE HERE: `price` should validate that the value is a decimal
    stock INT NOT NULL,
    -- CODE HERE: `stock` should validate that the value is numeric
    FOREIGN KEY category_id REFERENCES Category(id)
    -- CODE HERE = must be an integer
    -- FOREIGN KEY = key from another table
    -- category_id = column name
    -- REFERENCES Category(id) = contents are the `id` column from the `Category` table
);

CREATE TABLE Tag (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    tag_name TEXT
);

CREATE TABLE ProductTag (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    FOREIGN KEY product_id REFERENCES Product(id),
    -- CODE HERE = must be an integer
    FOREIGN KEY tag_id REFERENCES Tag(id)
    -- CODE HERE = must be an integer
);