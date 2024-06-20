import express from 'express';
import bcrypt from 'bcrypt';
import {
    createUser, getAllUsers, getUserById, getUserByEmail, createProgram, getAllPrograms, getProgramById, createRequest, getAllRequests, createAdvisement, getAllAdvisements, createForum, getAllForums, getForumById, createMessage, getAllMessages, createCourse, getAllCourses, getCourseById, createRegistration, getAllRegistrations, deleteUser, deleteProgram
} from './database.js';
import cors from 'cors';

const corsOptions = {
    origin: '*',
    methods: ['POST', 'GET'],
    credentials: true,
};

const app = express();
app.use(express.json());
app.use(cors(corsOptions));

// Obtener todos los usuarios
app.get('/allusers', async (req, res) => {
    const users = await getAllUsers();
    res.status(200).send(users);
})

// Autenticación
app.post('/users', async (req, res) => {
    const { correo, contrasena } = req.body;
    // Verificar si el usuario existe en la base de datos
    const user = await getUserByEmail(correo);
    if (!user) {
        return res.status(401).json({ message: 'Correo electrónico o contraseña incorrectos' });
    }
    // Verificar si la contraseña es correcta
    const isMatch = await bcrypt.compare(contrasena, user.contraseña);
    if (!isMatch) {
        return res.status(401).json({ message: 'Correo electrónico o contraseña incorrectos' });
    }
    // Si el usuario y la contraseña coinciden, se considera exitoso el inicio de sesión
    res.status(200).json({ message: 'Inicio de sesión exitoso', user });
});

// Obtener id de usuario
app.get('/users/:id', async (req, res) => {
    const user = await getUserById(req.params.id);
    res.status(200).send(user);
});

// Crear un nuevo usuario
app.post('/register', async (req, res) => {
    const { nombre, correo, contrasena, edad, direccion, telefono } = req.body;
    const user = await createUser(nombre, correo, contrasena, edad, direccion, telefono);
    res.status(201).send(user);
});

// Eliminar usuario
app.delete("/users/:id", async (req, res) => {
    try {
        await deleteUser(req.params.id);
        res.send({ message: "User deleted successfully" });
    } catch (error) {
        console.error('Error al eliminar el usuario:', error);
        res.status(500).send('Error al eliminar el usuario');
    }
});

// ADMIN
// Insertar un nuevo programa
app.post('/programas', async (req, res) => {
    const {nombre, descripcion, tipo, requisitos, fecha_inicio, fecha_fin} = req.body;
    try {
        const programa = await createProgram(nombre, descripcion, tipo, requisitos, fecha_inicio, fecha_fin);
        res.status(201).send(programa);
    } catch (error) {
        console.error('Error al crear el programa:', error);
        res.status(500).send('Error al crear el programa');
    }
});

// Obtener todos los programas
app.get('/programas', async (req, res) => {
    const programas = await getAllPrograms();
    res.status(200).send(programas);
});

// Obtener programa por id
app.get('/programas/:id', async (req, res) => {
    const programa = await getProgramById(req.params.id);
    res.status(200).send(programa);
});

// Eliminar programa
app.delete("/programas/:id", async (req, res) => {
    try {
        await deleteProgram(req.params.id);
        res.send({ message: "Program deleted successfully" });
    } catch (error) {
        console.error('Error al eliminar el programa:', error);
        res.status(500).send('Error al eliminar el programa');
    }
});

// Insertar una solicitud
app.post('/solicitudes', async (req, res) => {
    const { id_usuario, id_programa, fecha_solicitud, estado, comentarios } = req.body;
    try {
        const solicitud = await createRequest(id_usuario, id_programa, fecha_solicitud, estado, comentarios);
        res.status(201).send(solicitud);
    } catch (error) {
        console.error('Error al crear la solicitud:', error);
        res.status(500).send('Error al crear la solicitud');
    }
});

// Obtener todas las solicitudes
app.get('/solicitudes', async (req, res) => {
    const solicitudes = await getAllRequests();
    res.status(200).send(solicitudes);
});

// Insertar una asesoría
app.post('/asesorias', async (req, res) => {
    const { id_usuario, fecha_asesoria, tipo_asesoria, estado, comentarios } = req.body;
    try {
        const asesoria = await createAdvisement(id_usuario, fecha_asesoria, tipo_asesoria, estado, comentarios);
        res.status(201).send(asesoria);
    } catch (error) {
        console.error('Error al crear la asesoría:', error);
        res.status(500).send('Error al crear la asesoría');
    }
});

// Obtener todas las asesorías
app.get('/asesorias', async (req, res) => {
    const asesorias = await getAllAdvisements();
    res.status(200).send(asesorias);
});

// Insertar un foro
app.post('/foros', async (req, res) => {
    const { titulo, descripcion, fecha_creacion, id_usuario } = req.body;
    try {
        const foro = await createForum(titulo, descripcion, fecha_creacion, id_usuario);
        res.status(201).send(foro);
    } catch (error) {
        console.error('Error al crear el foro:', error);
        res.status(500).send('Error al crear el foro');
    }
});

// Obtener todos los foros
app.get('/foros', async (req, res) => {
    const foros = await getAllForums();
    res.status(200).send(foros);
});

// Obtener foro por id
app.get('/foros/:id', async (req, res) => {
    const foro = await getForumById(req.params.id);
    res.status(200).send(foro);
});

// Insertar un mensaje
app.post('/mensajes', async (req, res) => {
    const { id_foro, id_usuario, contenido, fecha_envio } = req.body;
    try {
        const mensaje = await createMessage(id_foro, id_usuario, contenido, fecha_envio);
        res.status(201).send(mensaje);
    } catch (error) {
        console.error('Error al crear el mensaje:', error);
        res.status(500).send('Error al crear el mensaje');
    }
});

// Obtener todos los mensajes
app.get('/mensajes', async (req, res) => {
    const mensajes = await getAllMessages();
    res.status(200).send(mensajes);
});

// Insertar un taller
app.post('/talleres', async (req, res) => {
    const { titulo, descripcion, fecha, hora, duracion, id_usuario } = req.body;
    try {
        const taller = await createCourse(titulo, descripcion, fecha, hora, duracion, id_usuario);
        res.status(201).send(taller);
    } catch (error) {
        console.error('Error al crear el taller:', error);
        res.status(500).send('Error al crear el taller');
    }
});

// Obtener todos los talleres
app.get('/talleres', async (req, res) => {
    const talleres = await getAllCourses();
    res.status(200).send(talleres);
});

// Obtener taller por id
app.get('/talleres/:id', async (req, res) => {
    const taller = await getCourseById(req.params.id);
    res.status(200).send(taller);
});

// Insertar una inscripción
app.post('/inscripciones', async (req, res) => {
    const { id_taller, id_usuario, fecha_inscripcion } = req.body;
    try {
        const inscripcion = await createRegistration(id_taller, id_usuario, fecha_inscripcion);
        res.status(201).send(inscripcion);
    } catch (error) {
        console.error('Error al crear la inscripción:', error);
        res.status(500).send('Error al crear la inscripción');
    }
});

// Obtener todas las inscripciones
app.get('/inscripciones', async (req, res) => {
    const inscripciones = await getAllRegistrations();
    res.status(200).send(inscripciones);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
