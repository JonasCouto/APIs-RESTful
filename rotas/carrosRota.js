const express =require('express');
const router = express.Router();

const carroController = require('../controller/carroController')


// Rota para LISTar TODOS CARROS
router.get('/', carroController.listar)
router.post('/', carroController.adicionar)
router.get('/:id', carroController.buscarPorId)
router.put('/:id', carroController.atualizar)
router.delete('/:id', carroController.excluir)


module.exports = router