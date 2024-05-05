const express = require('express');
const router = express.Router();
const tutoresController = require('../controllers/tutoresController');

router.get('/', tutoresController.getAllTutores);

router.post('/', tutoresController.createTutor);

router.get('/:tutorId/alumnos', tutoresController.getAlumnosByTutor);

module.exports = router;
