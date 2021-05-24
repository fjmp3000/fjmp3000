CREATE DATABASE faigWeb;

USE faigWeb;

CREATE TABLE contacte(
    id int(11) NOT NULL AUTO_INCREMENT,
    username VARCHAR(9) NOT NULL,
    apellido VARCHAR(20) NOT NULL,
    email VARCHAR(40) NOT NULL,
    pregunta VARCHAR(100) NOT NULL,
    PRIMARY KEY(id)
);