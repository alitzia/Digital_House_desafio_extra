module.exports = function(sequelize, dataTypes){
    let alias = 'Album';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
            },
        nombre:{
            type: dataTypes.STRING(40),
            allowNull: false
        },
        duracion:{
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };
        let config = {
            tableName: 'albumes',
            timestamps: false
    }
    const Album = sequelize.define(alias, cols, config); 

    Album.associate = function(models){
        Album.hasMany(models.Cancion,{
            as: "canciones",
            foreignKey: "genero_id"
        });
    }
    return Album
};