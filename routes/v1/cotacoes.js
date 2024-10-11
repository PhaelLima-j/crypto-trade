const express = require('express')

const { logger } = require('../../utils');

const { buscaCotacoes } = require('../../services');

const router = express.Router();

router.get('/', async (_req, res) => {
    try{
        const cotacoes = await buscaCotacoes();
        
        res.json({
            sucesso: true,
            cotacoes,
        });
    } catch (e) {
        logger.error(`Erro ao buscar as cotacoes: ${e.message}`);

        res.status(500).json({
            sucesso: false,
            erro: e.message,
        });
    }

})

module.exports = router;