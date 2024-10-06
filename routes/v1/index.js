const express = require('express');

const statusRouter = require('./status');
const usuariosRouter = require('./usuarios')

const router = express.Router();

router.use('/usuarios', usuariosRouter);
router.use('/status', statusRouter);

module.exports = router;
