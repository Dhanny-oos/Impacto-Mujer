import mysql from 'mysql2';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';

dotenv.config();

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
}).promise();

// Obtener todos los usuarios
export async function getAllUsers() {
    const [rows] = await pool.query(
        'SELECT * FROM users'
    );
    return rows;
}

// Autenticar usuario
export async function getUserByEmail(email) {
    const [rows] = await pool.query(
        'SELECT * FROM users WHERE correo = ? LIMIT 1', [email]
    );
    return rows[0];
}

// Obtener usuario por ID
export async function getUserById(id) {
    const [rows] = await pool.query(
        'SELECT * FROM users WHERE id_usuario = ?', [id]
    );
    return rows[0];
}

// Insertar un nuevo usuario
export async function createUser(nombre, correo, contrasena, edad, direccion, telefono) {
    // Generar un hash de la contraseña
    const hashedPassword = await bcrypt.hash(contrasena, 10);
    const [result] = await pool.query(
        'INSERT INTO users (nombre, correo, contraseña, edad, direccion, telefono) VALUES (?, ?, ?, ?, ?, ?)', 
        [nombre, correo, hashedPassword, edad, direccion, telefono]);
    return { id: result.insertId, nombre, correo, hashedPassword, edad, direccion, telefono };
}

// Eliminar usuario por id
export async function deleteUser(id) {
    const [result] = await pool.query(
        `DELETE FROM users
        WHERE id_usuario = ?;`,
        [id]
    );
    return result;
}

// Obtener todos los programas
export async function getAllPrograms() {
    const [rows] = await pool.query(
        'SELECT * FROM programs'
    );
    return rows;
}

// Insertar un nuevo programa
export async function createProgram(nombre, descripcion, tipo, requisitos, fecha_inicio, fecha_fin) {
    const [result] = await pool.query(
    `INSERT INTO programs (nombre, descripcion, tipo, requisitos, fecha_inicio, fecha_fin)
    VALUES (?, ?, ?, ?, ?, ?)`,
    [nombre, descripcion, tipo, requisitos, fecha_inicio, fecha_fin]
    );
    const programId = result.insertId;
    const nuevoPrograma = await getProgramById(programId);
    console.log('Programa creado:', nuevoPrograma);
}

// Obtener programa por ID
export async function getProgramById(id) {
    const [rows] = await pool.query(
        'SELECT * FROM programs WHERE id_programa = ?', [id]
    );
    return rows[0];
}

// Eliminar programa por id
export async function deleteProgram(id) {
    const [result] = await pool.query(
        `DELETE FROM programs
        WHERE id_programa = ?;`,
        [id]
    );
    return result;
}

// Insertar una solicitud
export async function createRequest(id_usuario, id_programa, fecha_solicitud, estado, comentarios) {
    const [result] = await pool.query(
    `INSERT INTO request (id_usuario, id_programa, fecha_solicitud, estado, comentarios)
    VALUES (?, ?, ?, ?, ?)`,
    [id_usuario, id_programa, fecha_solicitud, estado, comentarios]
    );
    console.log('Solicitud creada:', result);
}

// Obtener todas las solicitudes
export async function getAllRequests() {
    const [rows] = await pool.query(
        'SELECT * FROM request'
    );
    return rows;
}

// Insertar una asesoría
export async function createAdvisement(id_usuario, fecha_asesoria, tipo_asesoria, estado, comentarios) {
    const [result] = await pool.query(
    `INSERT INTO advisement (id_usuario, fecha_asesoria, tipo_asesoria, estado, comentarios)
    VALUES (?, ?, ?, ?, ?)`,
    [id_usuario, fecha_asesoria, tipo_asesoria, estado, comentarios]
    );
    console.log('Asesoría creada:', result);
}

// Obtener todas las asesorías
export async function getAllAdvisements() {
    const [rows] = await pool.query(
        'SELECT * FROM advisement'
    );
    return rows;
}

// Insertar un foro
export async function createForum(titulo, descripcion, fecha_creacion, id_usuario) {
    const [result] = await pool.query(
    `INSERT INTO forums (titulo, descripcion, fecha_creacion, id_usuario)
    VALUES (?, ?, ?, ?)`,
    [titulo, descripcion, fecha_creacion, id_usuario]
    );
    const forumId = result.insertId;
    const nuevoForo = await getForumById(forumId);
    console.log('Foro creado:', nuevoForo);
}

// Obtener todos los foros
export async function getAllForums() {
    const [rows] = await pool.query(
        'SELECT * FROM forums'
    );
    return rows;
}

// Obtener foro por ID
export async function getForumById(id) {
    const [rows] = await pool.query(
        'SELECT * FROM forums WHERE id_foro = ?', [id]
    );
    return rows[0];
}

// Insertar un mensaje
export async function createMessage(id_foro, id_usuario, contenido, fecha_envio) {
    const [result] = await pool.query(
    `INSERT INTO messages (id_foro, id_usuario, contenido, fecha_envio)
    VALUES (?, ?, ?, ?)`,
    [id_foro, id_usuario, contenido, fecha_envio]
    );
    console.log('Mensaje creado:', result);
}

// Obtener todos los mensajes
export async function getAllMessages() {
    const [rows] = await pool.query(
        'SELECT * FROM messages'
    );
    return rows;
}

// Insertar un taller
export async function createCourse(titulo, descripcion, fecha, hora, duracion, id_usuario) {
    const [result] = await pool.query(
    `INSERT INTO course (titulo, descripcion, fecha, hora, duracion, id_usuario)
    VALUES (?, ?, ?, ?, ?, ?)`,
    [titulo, descripcion, fecha, hora, duracion, id_usuario]
    );
    const courseId = result.insertId;
    const nuevoTaller = await getCourseById(courseId);
    console.log('Taller creado:', nuevoTaller);
}

// Obtener todos los talleres
export async function getAllCourses() {
    const [rows] = await pool.query(
        'SELECT * FROM course'
    );
    return rows;
}

// Obtener taller por ID
export async function getCourseById(id) {
    const [rows] = await pool.query(
        'SELECT * FROM course WHERE id_taller = ?', [id]
    );
    return rows[0];
}

// Insertar una inscripción
export async function createRegistration(id_taller, id_usuario, fecha_inscripcion) {
    const [result] = await pool.query(
    `INSERT INTO registration (id_taller, id_usuario, fecha_inscripcion)
    VALUES (?, ?, ?)`,
    [id_taller, id_usuario, fecha_inscripcion]
    );
    console.log('Inscripción creada:', result);
}

// Obtener todas las inscripciones
export async function getAllRegistrations() {
    const [rows] = await pool.query(
        'SELECT * FROM registration'
    );
    return rows;
}
