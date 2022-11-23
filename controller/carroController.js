
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