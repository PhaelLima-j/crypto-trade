const express = require('express')

const { logger } = require('../../utils');

const router = express.Router();

router.delete('/deposito/:id', async (req, res) => {
    const usuario = req.user;
    const depositoId = req.params.id;

    try {
        const deposito = usuario.depositos.id(depositoId);

        if(!deposito){
            throw new Error('Não existe um depósito com esse identificador');
        }

        deposito.status = 'Cancelado';
        await usuario.save();

        res.json({
            sucesso: true,
        });
    
    } catch (e) {
        logger.error(`Erro ao cancelar o depósito: ${e.message}`);

        res.status(422).json({
            sucesso: false,
            erro: e.message,
        });

    }
});

module.exports = router;


