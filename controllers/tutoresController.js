const { Tutor, Alumno } = require('../models');

exports.createTutor = async (req, res) => {
    try {
        const { nombre } = req.body;
        if (!nombre) {
            return res.status(400).json({ message: "El nombre del tutor es requerido" });
        }
        const nuevoTutor = await Tutor.create({ nombre });
        res.status(201).json(nuevoTutor);
    } catch (error) {
        res.status(500).json({ message: "Error al crear el tutor", error: error.message });
    }
};

exports.getAllTutores = async (req, res) => {
    try {
        const tutores = await Tutor.findAll();
        res.json(tutores);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los tutores", error: error.message });
    }
};

exports.getAlumnosByTutor = async (req, res) => {
    try {
        const { tutorId } = req.params;
        const tutor = await Tutor.findByPk(tutorId, {
            include: [Alumno]
        });
        if (!tutor) {
            return res.status(404).json({ message: "Tutor no encontrado" });
        }
        res.json(tutor.Alumnos);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los alumnos del tutor", error: error.message });
    }
};
