const { Materia, Alumno } = require('../models');

exports.createMateria = async (req, res) => {
    try {
        const { nombre } = req.body;
        if (!nombre) {
            return res.status(400).json({ message: "El nombre de la materia es requerido" });
        }
        const nuevaMateria = await Materia.create({ nombre });
        res.status(201).json(nuevaMateria);
    } catch (error) {
        res.status(500).json({ message: "Error al crear la materia", error: error.message });
    }
};

exports.assignMateriaToAlumno = async (req, res) => {
    try {
        const { alumnoId, materiaId } = req.params;
        const alumno = await Alumno.findByPk(alumnoId);
        if (!alumno) {
            return res.status(404).json({ message: "Alumno no encontrado" });
        }
        const materia = await Materia.findByPk(materiaId);
        if (!materia) {
            return res.status(404).json({ message: "Materia no encontrada" });
        }
        await alumno.addMateria(materia);
        res.json({ message: "Materia asignada correctamente al alumno" });
    } catch (error) {
        res.status(500).json({ message: "Error al asignar la materia", error: error.message });
    }
};
