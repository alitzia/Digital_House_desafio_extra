var express = require('express');
var router = express.Router();

const cancionesRoutes = require('./cancionesRoutes');
const generosRoutes = require('./generosRoutes');

router.use(cancionesRoutes);
router.use(generosRoutes);

module.exports = router;