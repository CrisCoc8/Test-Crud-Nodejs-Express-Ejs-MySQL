CREATE DATABASE juegos;

USE juegos;

CREATE TABLE catalogo(
  sid INT(3) AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  precio INT(7) NOT NULL
);

CREATE TABLE categorias(
  sid INT(3) AUTO_INCREMENT PRIMARY KEY,
  categoria VARCHAR(50) NOT NULL
);

CREATE TABLE usuarios(
  sid INT(3) AUTO_INCREMENT PRIMARY KEY,
  usuario VARCHAR(50) NOT NULL,
  contrasena VARCHAR(50) NOT NULL
);

SHOW TABLES;

describe catalogo;
describe categorias;
