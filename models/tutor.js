module.exports = (sequelize, DataTypes) => {
    const Tutor = sequelize.define('Tutor', {
        nombre: DataTypes.STRING
    });
    Tutor.associate = function(models) {
        Tutor.hasMany(models.Alumno);
    };
    return Tutor;
};
