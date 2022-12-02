const express =require('express');
const router = express.Router();



const clienteController = require('../controller/clienteController')


// Rota para LISTar TODOS clientes
router.get('/', clienteController.listar)
router.post('/', clienteController.adicionar)
router.get('/:id', clienteController.buscarPorId)
router.put('/:id', clienteController.atualizar)
router.delete('/:id', clienteController.excluir)

module.exports = router;
