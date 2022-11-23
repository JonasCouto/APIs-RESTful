const express =require('express');
const router = express.Router();


// Rota para LISTar TODOS clientes
router.get('/', (req, res)=>{
    res.status(200).send({message: 'Listar todos clientes'});
});

// Rota para INSERIR cliente
router.post('/', (req, res)=>{
    const cliente = {
        nome: req.body.nome,
        email: req.body.email,
        cpf: req.body.cpf,
        telefone: req.body.telefone,
        idade: req.body.idade,
        endereco: req.body.endereco
    }

    res.status(200).send({
        message: 'Inserir cliente',
        clienteNovo: cliente
    });
});

// Rota para localizar cliente especificado
router.get('/:id', (req, res)=>{
    const id = req.params.id;
    if (id == 'achou') {
        res.status(200).send({message: 'Cliente correto localizado '});    
    }else{
        res.status(404).send({message: ' Cliente não localizado'});
    }
    
});

// Rota para atualizar  cliente
router.put('/:id', (req, res)=>{
    const id = req.params.id;
    if (id == 'achou') {
        res.status(200).send({message: 'Cliente correto localizado '});    
    }else{
        res.status(404).send({message: ' Cliente não localizado'});
    }
    
});


// Rota para DELETAR
router.delete('/:id', (req, res)=>{
    const id = req.params.id;
    if (id == 'achou') {
        res.status(200).send({message: 'DELETOU cliente correto localizado '});    
    }else{
        res.status(404).send({message: 'Não DELETOU cliente localizado'});
    }
    
});




module.exports = router;
