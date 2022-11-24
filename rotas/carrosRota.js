const express =require('express');
const router = express.Router();


const carroController = require('../controller/carroController')




// Rota para LISTar TODOS CARROS
router.get('/', carroController.listar)

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
// router.get('/:id', (req, res)=>{
//     const id = req.params.id;
//     if (id == 'achou') {
//         res.status(200).send({message: 'Veiculo correto localizado '});    
//     }else{
//         res.status(404).send({message: ' Veiculo não localizado'});
//     }
    
// });

// // Rota para atualizar  veiculo
// router.put('/:id', (req, res)=>{
//     const id = req.params.id;
//     if (id == 'achou') {
//         res.status(200).send({message: 'Veiculo correto localizado '});    
//     }else{
//         res.status(404).send({message: ' Veiculo não localizado'});
//     }
    
// });


// // Rota para DELETAR
// router.delete('/:id', (req, res)=>{
//     const id = req.params.id;
//     if (id == 'achou') {
//         res.status(200).send({message: 'DELETOU correto localizado '});    
//     }else{
//         res.status(404).send({message: 'Não DELETOU veiculo localizado'});
//     }
    
// });


module.exports = router