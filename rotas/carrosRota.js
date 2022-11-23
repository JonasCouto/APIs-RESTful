const express =require('express');
const router = express.Router();
const pool = require('../data/db');

const carroController = require('../controller/carroController')


//const carroController = require('../controller/carroController');

//router.get('/carros', (carroController.listar)





// Rota para LISTar TODOS CARROS
router.get('/', (callback)=>{
    res.status(200).send({message: 'Listar todos carros'});
    pool.connect();

    const sql = "select * from dbApiCarros";
    pool.query(sql, (err, result)=>{
        if(err){
            callback(err, undefined);
        }else{
            callback(undefined, result.rows);            
        }
        pool.close();
        
});

router.get('/', carroController);
// Rota para INSERIR veiculo
// router.post('/', (req, res)=>{
//     const carro = {
//         nome: req.body.nome,
//         marca: req.body.marca,
//         cor: req.body.cor,
//         placa: req.body.placa, 
//         preco: req.body.preco
//     }

//     res.status(200).send({
//         message: 'Inserir carros',
//         carroNovo: carro
//     });
// });



// Rota para localizar veiculo especificado
router.get('/:id', (req, res)=>{
    const id = req.params.id;
    if (id == 'achou') {
        res.status(200).send({message: 'Veiculo correto localizado '});    
    }else{
        res.status(404).send({message: ' Veiculo não localizado'});
    }
    
});

// Rota para atualizar  veiculo
router.put('/:id', (req, res)=>{
    const id = req.params.id;
    if (id == 'achou') {
        res.status(200).send({message: 'Veiculo correto localizado '});    
    }else{
        res.status(404).send({message: ' Veiculo não localizado'});
    }
    
});


// Rota para DELETAR
router.delete('/:id', (req, res)=>{
    const id = req.params.id;
    if (id == 'achou') {
        res.status(200).send({message: 'DELETOU correto localizado '});    
    }else{
        res.status(404).send({message: 'Não DELETOU veiculo localizado'});
    }
    
});


module.exports = router})