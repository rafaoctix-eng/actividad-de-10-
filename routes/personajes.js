const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/personajesController');

router.post('/', ctrl.crearPersonaje);
router.get('/', ctrl.listarPersonajes);
router.get('/:id', ctrl.obtenerPersonaje);
router.put('/:id', ctrl.actualizarPersonaje);
router.delete('/:id', ctrl.eliminarPersonaje);

module.exports = router;