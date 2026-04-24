const { personajes } = require('../data/db');
const { v4: uuidv4 } = require('uuid');
const Personaje = require('../models/personaje');

exports.crearPersonaje = (req, res) => {
    const { nombre, colorPiel, raza, estadisticas } = req.body;
    const nuevo = new Personaje(uuidv4(), nombre, colorPiel, raza, estadisticas);
    personajes.push(nuevo);
    res.status(201).json(nuevo);
};

exports.listarPersonajes = (req, res) => res.json(personajes);

exports.obtenerPersonaje = (req, res) => {
    const personaje = personajes.find(p => p.id === req.params.id);
    if (!personaje) return res.status(404).json({ msg: "No encontrado" });
    res.json(personaje);
};

exports.actualizarPersonaje = (req, res) => {
    const personaje = personajes.find(p => p.id === req.params.id);
    if (!personaje) return res.status(404).json({ msg: "No encontrado" });
    Object.assign(personaje, req.body);
    res.json(personaje);
};

exports.eliminarPersonaje = (req, res) => {
    const index = personajes.findIndex(p => p.id === req.params.id);
    if (index === -1) return res.status(404).json({ msg: "No encontrado" });
    personajes.splice(index, 1);
    res.json({ msg: "Eliminado" });
};