module.exports = function(sequelize, dataTypes){
    let alias = 'Artista';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
            },
        nombre:{
            type: dataTypes.STRING(20),
            allowNull: false
        },
        apellido:{
            type: dataTypes.STRING(20),
            allowNull: true
        }
    };
        let config = {
            tableName: 'artistas',
            timestamps: false
    }
    const Artista = sequelize.define(alias, cols, config); 

    Artista.associate = function(models){
        Artista.hasMany(models.Cancion,{
            as: "canciones",
            foreignKey: "artista_id"
        });
    }
    return Artista
};