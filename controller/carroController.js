
const carroPersistencia = require('../persistencia/carroPersistencia');


exports.listar = async (req, res)=>{
    carroPersistencia.listar((err, listaCarros)=>{
        if(err){
            return res.status(500).json({error: err.message});
        }else{
            return res.status(200).json(listaCarros)
        }

    })

}

exports.adicionar = async (req, res)=>{
    const carro = req.body

    carroPersistencia.adicionar(carro, (err, carroAdicionado)=>{
        if(err){
            return res.status(500).json({error: err.message});
        }else{
            return res.status(200).json(carroAdicionado)
        }

    })

}

exports.buscarPorId = async (req, res)=>{
    const id = req.params.id;
    carroPersistencia.buscarPorId(id, (err, carro)=>{
        if(err){
            return res.status(500).json({error: err.message});
        }else{
            if(carro){
                return res.json(carro);
            }
            return res.status(404).json({error: "Carro não encontrado"})
        }
    })

}


exports.atualizar = (req, res) => {
    const carro = req.body;
    const id = req.params.id;

    carroPersistencia.atualizar(id, carro, (err, carroAtualizado) => {
        if(err) {
            return res.status(500).json({erro: err});
        }
        else { 
            if(carroAtualizado) 
                return res.json(carroAtualizado);
            else {
                return res.status(404).json({erro:"Carro nao encontrado"});
            }
        }
    })
}

exports.excluir = (req, res) => {
    const id = req.params.id;

    carroPersistencia.excluir(id, (err, carroDeletado) => {
        if(err) {
            return res.status(500).json({erro: err});
        }
        else { 
            if(carroDeletado) 
                return res.json(carroDeletado);
            else {
                return res.status(404).json({erro:"Carro nao encontrado"});
            }
        }
    })
}