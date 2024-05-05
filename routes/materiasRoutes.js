const express = require('express');
const router = express.Router();
const materiasController = require('../controllers/materiasController');

router.post('/', materiasController.createMateria);

router.post('/:materiaId/alumnos/:alumnoId', materiasController.assignMateriaToAlumno);

module.exports = router;
