module.exports = (sequelize, DataTypes) => {
    const Alumno = sequelize.define('Alumno', {
        nombre: DataTypes.STRING
    });
    Alumno.associate = function(models) {
        Alumno.belongsTo(models.Tutor);
        Alumno.belongsToMany(models.Materia, { through: 'AlumnoMaterias' });
    };
    return Alumno;
};