const clientePersistencia = require('../persistencia/clientePersistencia');


exports.listar = async (req, res)=>{
    clientePersistencia.listar((err, listaClientes)=>{
        if(err){
            return res.status(500).json({error: err.message});
        }else{
            return res.status(200).json(listaClientes)
        }

    })

}

exports.adicionar = async (req, res)=>{
    const cliente = req.body

    clientePersistencia.adicionar(cliente, (err, clienteInserido)=>{
        if(err){
            return res.status(500).json({error: err.message});
        }else{
            return res.status(200).json(clienteInserido)
        }

    })

}

exports.buscarPorId = async (req, res)=>{
    const id = req.params.id;
    clientePersistencia.buscarPorId(id, (err, cliente)=>{
        if(err){
            return res.status(500).json({error: err.message});
        }else{
            if(cliente){
                return res.json(cliente);
            }
            return res.status(404).json({error: "Cliente não encontrado"})
        }
    })

}

exports.atualizar = (req, res) => {
    const cliente = req.body;
    const id = req.params.id;

    clientePersistencia.atualizar(id, cliente, (err, clienteAtualizado) => {
        if(err) {
            return res.status(500).json({erro: err});
        }
        else { 
            if(clienteAtualizado) 
                return res.json(clienteAtualizado);
            else {
                return res.status(404).json({erro:"Cliente nao encontrado"});
            }
        }
    })
}

exports.excluir = (req, res) => {
    const id = req.params.id;

    clientePersistencia.excluir(id, (err, clienteDeletado) => {
        if(err) {
            return res.status(500).json({erro: err});
        }
        else { 
            if(clienteDeletado) 
                return res.json(clienteDeletado);
            else {
                return res.status(404).json({erro:"Cliente nao encontrado"});
            }
        }
    })
}