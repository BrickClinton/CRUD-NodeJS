CREATE DATABASE crudnodejs;

USE crudnodejs;

CREATE TABLE customer 
(
	id 				INT AUTO_INCREMENT PRIMARY KEY,
	nameuser  VARCHAR(50)		NOT NULL,
	address 	VARCHAR(100) 	NOT NULL,
	phone     VARCHAR(11)		
)ENGINE = INNODB;

SHOW TABLES;

DESCRIBE customer;


SELECT * FROM customer;