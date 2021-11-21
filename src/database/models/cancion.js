module.exports = function(sequelize, dataTypes){
    let alias = 'Cancion';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
            },
        titulo:{
            type: dataTypes.STRING(100),
            allowNull: false
        },
        duracion:{
            type: dataTypes.INTEGER,
            allowNull: true
        },
        genero_id:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        album_id:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        artista_id:{
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };
        let config = {
            tableName: 'canciones',
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at'
    }
    const Cancion = sequelize.define(alias, cols, config); 

    Cancion.associate = function(models){
        Cancion.belongsTo(models.Genero,{
            as: "genero",
            foreignKey: "genero_id"
        });
    }

    Cancion.associate = function(models){
        Cancion.belongsTo(models.Album,{
            as: "album",
            foreignKey: "album_id"
        });
    }

    Cancion.associate = function(models){
        Cancion.belongsTo(models.Artista,{
            as: "artista",
            foreignKey: "artista_id"
        });
    }

    return Cancion
};