const express = require('express');
const passport = require('passport');

require ('./auth/jwt');

const statusRouter = require('./status');
const usuariosRouter = require('./usuarios')
const authRouter = require('./auth');
const depositosRouter = require('./depositos')
const saquesRouter = require('./saques')
const cancelaDepositosRouter = require('./cancelaDepositos')
const cotacoesRouter = require('./cotacoes')

const router = express.Router();

router.use('/usuarios', usuariosRouter);
router.use('/status', statusRouter);
router.use('/auth', authRouter);
router.use('/depositos', passport.authenticate('jwt', { session: false }), depositosRouter);
router.use('/saques', passport.authenticate('jwt', { session: false }), saquesRouter);
router.use('/cancelaDepositos', passport.authenticate('jwt', { session: false }), cancelaDepositosRouter);
router.use('/cotacoes', passport.authenticate('jwt', { session: false }), cotacoesRouter);

module.exports = router;
