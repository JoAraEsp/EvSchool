const Alumno = require('../models/alumno');
const Tutor = require('../models/tutor');
const Materia = require('../models/materia');

exports.getAllAlumnos = async (req, res) => {
    try {
        const alumnos = await Alumno.findAll({
            include: [Tutor, Materia]
        });
        res.json(alumnos);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los alumnos", error: error.message });
    }
};

exports.createAlumno = async (req, res) => {
    try {
        const { nombre } = req.body;
        if (!nombre) {
            return res.status(400).json({ message: "El nombre es requerido" });
        }
        const alumno = await Alumno.create({ nombre });
        res.status(201).json(alumno);
    } catch (error) {
        res.status(500).json({ message: "Error al crear el alumno", error: error.message });
    }
};

exports.getAlumnoById = async (req, res) => {
    try {
        const { id } = req.params;
        const alumno = await Alumno.findByPk(id, {
            include: [Tutor, Materia]
        });
        if (!alumno) {
            return res.status(404).json({ message: "Alumno no encontrado" });
        }
        res.json(alumno);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el alumno", error: error.message });
    }
};

exports.assignTutor = async (req, res) => {
    try {
        const { alumnoId, tutorId } = req.params;
        const alumno = await Alumno.findByPk(alumnoId);
        if (!alumno) {
            return res.status(404).json({ message: "Alumno no encontrado" });
        }
        const tutor = await Tutor.findByPk(tutorId);
        if (!tutor) {
            return res.status(404).json({ message: "Tutor no encontrado" });
        }
        await alumno.setTutor(tutor);
        res.json({ message: "Tutor asignado correctamente", alumno });
    } catch (error) {
        res.status(500).json({ message: "Error al asignar tutor", error: error.message });
    }
};

exports.getAlumnoMaterias = async (req, res) => {
    try {
        const { alumnoId } = req.params;
        const alumno = await Alumno.findByPk(alumnoId, {
            include: Materia
        });
        if (!alumno) {
            return res.status(404).json({ message: "Alumno no encontrado" });
        }
        res.json(alumno.Materias);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener las materias del alumno", error: error.message });
    }
};
