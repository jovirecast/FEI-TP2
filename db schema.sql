-- ========================================================
-- CREACIÓN DE LA BASE DE DATOS
-- ========================================================
CREATE DATABASE IF NOT EXISTS ikmtyFEI
  DEFAULT CHARACTER SET utf8mb4
  DEFAULT COLLATE utf8mb4_unicode_ci;

USE ikmtyFEI;

-- ========================================================
-- TABLA: usuario
-- ========================================================
CREATE TABLE usuario (
    id_usuario      INT(11) AUTO_INCREMENT PRIMARY KEY,
    nickname        VARCHAR(50) NOT NULL UNIQUE,
    email           VARCHAR(100) NOT NULL UNIQUE,
    password        VARCHAR(255) NOT NULL,
    rol             ENUM('admin','jugador','invitado') NOT NULL DEFAULT 'jugador',
    fecha_registro  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ========================================================
-- TABLA: categoría
-- ========================================================
CREATE TABLE categoria (
    id_categoria    INT(11) AUTO_INCREMENT PRIMARY KEY,
    nombre          VARCHAR(50) NOT NULL UNIQUE,
    color           VARCHAR(8)  
);

-- ========================================================
-- TABLA: pregunta
-- ========================================================
CREATE TABLE pregunta (
    id_pregunta   INT(11) AUTO_INCREMENT PRIMARY KEY,
    id_categoria  INT(11) NOT NULL,
    texto         VARCHAR(255) NOT NULL,
    FOREIGN KEY (id_categoria) REFERENCES categoria(id_categoria)
        ON DELETE CASCADE ON UPDATE CASCADE
);

-- ========================================================
-- TABLA: respuesta
-- ========================================================
CREATE TABLE respuesta (
    id_respuesta  INT(11) AUTO_INCREMENT PRIMARY KEY,
    id_pregunta   INT(11) NOT NULL,
    texto         VARCHAR(255) NOT NULL,
    es_correcta   BOOLEAN NOT NULL DEFAULT FALSE,
    FOREIGN KEY (id_pregunta) REFERENCES pregunta(id_pregunta)
        ON DELETE CASCADE ON UPDATE CASCADE
);

-- ========================================================
-- TABLA: contacto
-- ========================================================
CREATE TABLE contacto (
    id_contacto   INT(11) AUTO_INCREMENT PRIMARY KEY,
    nombre        VARCHAR(50) NOT NULL,
    email         VARCHAR(100) NOT NULL,
    asunto        VARCHAR(50) NOT NULL,
    texto         VARCHAR(255) NOT NULL,
    creacion      TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
