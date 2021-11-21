const db = require('../database/models');

const cancionesController = {
    list(req, res) {
        db.Cancion.findAll()
            .then(canciones => {
                res.json({
                    meta: {
                        status : 200, //indica ejecución exitosa
                        total: canciones.length,
                        url: 'canciones'
                    },
                    data: canciones
                })
            })
    },

    detail(req, res) {
        db.Cancion.findByPk(req.params.id)
            .then(canciones => {
                return res.status(200).json({
                    data: canciones,
                    status: 200
                })  
        })
    },

    add(req, res) {
        //return res.json(req.body)
        db.Cancion.create(req.body)
            .then(cancion => {
                return res.status(200).json({
                    data: cancion,
                    status: 200,
                    created: 'Successfully added!'
                })  
        })
    },

    edit(req, res) {
        db.Cancion.findByPk(req.params.id)
            .then(canciones => {
                return res.status(200).json({
                    data: canciones,
                    status: 200
                })  
        })
    },

    update(req, res) 
        {
        db.Cancion.update(
            {
            titulo : req.body.titulo,
            duracion: req.body.duracion,
            genero_id : req.body.genero_id, 
            album_id : req.body.album_id, 
            artista_id : req.body.artista_id
            },
            {
            where: {id: req.params.id}
            })
            .then(cancion => {
                return res.status(200).json({
                    data: req.body,
                    status: 200,
                    created: 'Successfully updated!'
                })  
        }
        )},

    delete: (req, res) => {
        db.Cancion.destroy({
            where: {
                id: req.params.id
            }
        })
        .then((response)=> {
            //return res.json(response)
            return res.status(200).json({
                data: req.body,
                status: 200,
                created: 'Successfully deleted!'
            })
        })
        
    }

}

module.exports = cancionesController;