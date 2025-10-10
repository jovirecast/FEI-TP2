-- ========================================================
-- CREACIÓN DE LA BASE DE DATOS
-- ========================================================
CREATE DATABASE IF NOT EXISTS ikmtyfei
  DEFAULT CHARACTER SET utf8mb4
  DEFAULT COLLATE utf8mb4_unicode_ci;

USE ikmtyfei;

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

-- ========================================================
-- DATOS INICIALES para trivia (Laravel)
-- ========================================================

INSERT INTO Categoria (id_categoria, nombre, color) VALUES
(1, 'Matemática', '#FF0000'),
(2, 'Historia', '#00FF00'),
(3, 'Geografía', '#0000FF'),
(4, 'Ciencia', '#FFFF00'),
(5, 'Arte', '#FF00FF'),
(6, 'Deportes', '#00FFFF');

INSERT INTO Pregunta (id_pregunta, id_categoria, texto) VALUES
(1, 1, '¿Cuál es el número primo más pequeño?'),
(2, 2, '¿Quién descubrió América?'),
(3, 3, '¿Cuál es el río más largo del mundo?'),
(4, 4, '¿Qué elemento químico tiene el símbolo O?'),
(5, 5, '¿Quién pintó la Mona Lisa?'),
(6, 6, '¿Cuántos jugadores hay en un equipo de fútbol?');

INSERT INTO Respuesta (id_respuesta, id_pregunta, texto, es_correcta) VALUES
-- Pregunta 1
(1, 1, '0', 0),
(2, 1, '1', 0),
(3, 1, '2', 1),
(4, 1, '3', 0),
-- Pregunta 2
(5, 2, 'Cristóbal Colón', 1),
(6, 2, 'Vasco da Gama', 0),
(7, 2, 'Magallanes', 0),
(8, 2, 'Américo Vespucio', 0),
-- Pregunta 3
(9, 3, 'Nilo', 1),
(10, 3, 'Amazonas', 0),
(11, 3, 'Misisipi', 0),
(12, 3, 'Yangtsé', 0),
-- Pregunta 4
(13, 4, 'Oxígeno', 1),
(14, 4, 'Oro', 0),
(15, 4, 'Ozono', 0),
(16, 4, 'Plomo', 0),
-- Pregunta 5
(17, 5, 'Leonardo da Vinci', 1),
(18, 5, 'Pablo Picasso', 0),
(19, 5, 'Vincent Van Gogh', 0),
(20, 5, 'Miguel Ángel', 0),
-- Pregunta 6
(21, 6, '11', 1),
(22, 6, '9', 0),
(23, 6, '7', 0),
(24, 6, '10', 0);