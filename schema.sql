DROP DATABASE greatbay_db;
CREATE DATABASE greatbay_db;

USE greatbay_db;

CREATE TABLE products (
  id INTEGER NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(255) NOT NULL,
  department_name VARCHAR(255) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  stock_quantity INTEGER(10),
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES 
  ("phone", "electronics", 1299.99, 5),
  ("laptop", "electronics", 799.99, 2),
  ("watch", "accessories", 499.99, 1),
  ("the book theif", "books", 10.69, 10),
  ("the lord of the rings", "books", 15.99, 25),
  ("the immortalists", "books", 16.24, 5),
  ("game of thrones", "movies", 40.20, 50),
  ("venom", "movies", 14.99, 20),
  ("shazam", "movies", 3.99, 3),
  ("avengers", "movies", 50.00, 8),
  ("the office", "movies", 20.00, 10);