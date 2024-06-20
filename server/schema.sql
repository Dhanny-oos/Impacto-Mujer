CREATE DATABASE impacto_mujer;

USE impacto_mujer;

CREATE TABLE users (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100),
    correo VARCHAR(100) UNIQUE,
    contraseña VARCHAR(255),
    edad INT,
    direccion VARCHAR(255),
    telefono VARCHAR(15),
    verificado BOOLEAN DEFAULT FALSE
);

CREATE TABLE programs (
    id_programa INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100),
    descripcion TEXT,
    tipo VARCHAR(50),
    requisitos TEXT,
    fecha_inicio DATE,
    fecha_fin DATE
);

CREATE TABLE request (
    id_solicitud INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT,
    id_programa INT,
    fecha_solicitud DATE,
    estado VARCHAR(50),
    comentarios TEXT,
    FOREIGN KEY (id_usuario) REFERENCES users(id_usuario),
    FOREIGN KEY (id_programa) REFERENCES programs(id_programa)
);

CREATE TABLE advisement (
    id_asesoria INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT,
    fecha_asesoria DATE,
    tipo_asesoria VARCHAR(50),
    estado VARCHAR(50),
    comentarios TEXT,
    FOREIGN KEY (id_usuario) REFERENCES users(id_usuario)
);

CREATE TABLE forums (
    id_foro INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100),
    descripcion TEXT,
    fecha_creacion DATE,
    id_usuario INT,
    FOREIGN KEY (id_usuario) REFERENCES users(id_usuario)
);

CREATE TABLE messages (
    id_mensaje INT PRIMARY KEY AUTO_INCREMENT,
    id_foro INT,
    id_usuario INT,
    contenido TEXT,
    fecha_envio DATE,
    FOREIGN KEY (id_foro) REFERENCES forums(id_foro),
    FOREIGN KEY (id_usuario) REFERENCES users(id_usuario)
);

CREATE TABLE course (
    id_taller INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100),
    descripcion TEXT,
    fecha DATE,
    hora TIME,
    duracion INT,
    id_usuario INT,
    FOREIGN KEY (id_usuario) REFERENCES users(id_usuario)
);

CREATE TABLE registration (
    id_inscripcion INT PRIMARY KEY AUTO_INCREMENT,
    id_taller INT,
    id_usuario INT,
    fecha_inscripcion DATE,
    FOREIGN KEY (id_taller) REFERENCES course(id_taller),
    FOREIGN KEY (id_usuario) REFERENCES users(id_usuario)
);
