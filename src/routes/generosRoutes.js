const express = require ('express');
const router = express.Router();
const generosController = require ('../controllers/generosController');

router.get('/generos', generosController.list_all); // lista simple de generos
router.get('/generos/:id', generosController.list_one); //lista por genero

module.exports = router;