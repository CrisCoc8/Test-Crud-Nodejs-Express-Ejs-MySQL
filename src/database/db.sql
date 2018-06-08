CREATE DATABASE juegos;

USE juegos;

CREATE TABLE catalogo(
  sid INT(3) AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  categoria VARCHAR(50) NOT NULL,
  precio INT(7) NOT NULL
);

SHOW TABLES;

describe catalogo;
