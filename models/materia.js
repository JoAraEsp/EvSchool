module.exports = (sequelize, DataTypes) => {
    const Materia = sequelize.define('Materia', {
        nombre: DataTypes.STRING
    });
    Materia.associate = function(models) {
        Materia.belongsToMany(models.Alumno, { through: 'AlumnoMaterias' });
    };
    return Materia;
};
