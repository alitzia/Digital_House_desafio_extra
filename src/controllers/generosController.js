const db = require('../database/models');

const generosController = {
    //lista de generos con sus canciones
    list_all(req, res) {
        db.Genero.findAll({
            include: ['canciones']
        })
        .then(generos => {
                res.json({
                    meta: {
                        status : 200, //indica ejecución exitosa
                        total: generos.length,
                        url: 'generos'
                    },
                    data: generos
                    })
                })
        },

    //lista de un genero específico con sus canciones
    list_one: (req, res) => 
        {
        db.Genero.findByPk(req.params.id,
            {
            include: ['canciones']
            })
            .then(genero => 
                {
                let respuesta = 
                    {
                    meta: 
                        {
                        status: 200,
                        total: genero.length,
                        url: '/generos/:id/canciones'
                        },
                    data: genero
                    }
                    res.json(respuesta);
                })
        },
    
    lista(req, res) {
        db.Genero.findAll()
            .then(generos => {
                res.json({
                    meta: {
                        status : 200, //indica ejecución exitosa
                        total: generos.length,
                        url: 'generos'
                    },
                    data: generos
                    })
                })
        }
}

module.exports = generosController;