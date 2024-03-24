-- DROP DATABASE --
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE --
CREATE DATABASE ecommerce_db;

-- USE DATABASE --
USE ecommerce_db;


-- CREATE TABLES --

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
    FOREIGN KEY category_id REFERENCES Category(id) INT
);

CREATE TABLE Tag (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    tag_name TEXT
);

CREATE TABLE ProductTag (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    FOREIGN KEY product_id REFERENCES Product(id) INT,
    FOREIGN KEY tag_id REFERENCES Tag(id) INT
);