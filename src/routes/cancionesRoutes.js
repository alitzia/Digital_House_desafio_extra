const express = require ('express');
const router = express.Router();
const cancionesController = require ('../controllers/cancionesController');

router.get('/canciones', cancionesController.list);
router.get('/canciones/:id', cancionesController.detail);
router.post('/canciones', cancionesController.add);
router.put('/canciones/:id', cancionesController.update);
router.delete('/canciones/:id', cancionesController.delete);

module.exports = router;
