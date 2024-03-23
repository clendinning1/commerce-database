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
    category_id INT
    -- CODE HERE: `category_id` should reference the Category model's id.
);

CREATE TABLE Tag (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    tag_name TEXT
);

CREATE TABLE ProductTag (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    -- CODE HERE: `product_id` should reference the Product model's id.
    tag_id INT
    -- CODE HERE: `tag_id` should reference the Tag model's id.
);


-- CREATE TABLE department (
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     -- auto increment generates a unique number for each new insert --
--     name VARCHAR(30) NOT NULL
--     -- varchar = a string up to the length of the variable --
-- );

-- CREATE TABLE roles (
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     title VARCHAR(30) NOT NULL,
--     salary DECIMAL,
--     department_id INT,

--     FOREIGN KEY (department_id)
--     -- key named department_id --
--     REFERENCES department(id)
--     -- the department_id key pulls from "id" in the department table --
-- );