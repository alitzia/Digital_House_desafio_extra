// No necesito explicar todas las columnas de la BD, 
// pero solo podré usar las que incluya en el modelo.

module.exports = function(sequelize, dataTypes){
    let alias = 'Genero';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
            },
        name:{
            type: dataTypes.STRING(40),
            allowNull: false
        }
    };
        let config = {
            tableName: 'generos',
            timestamps: false
    }
    const Genero = sequelize.define(alias, cols, config); 

    Genero.associate = function(models){
        Genero.hasMany(models.Cancion,{
            as: "canciones",
            foreignKey: "genero_id"
        });
    }
    return Genero
};