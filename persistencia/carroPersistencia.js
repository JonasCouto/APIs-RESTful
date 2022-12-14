const { Client } = require('pg');

const conexao = {
    user: 'postgres',
    password: 'root',
    host: 'localhost',
    port: 5432,
    database: 'dbApiCarros'
}


// Listar carros
exports.listar = (callback)=>{
    const cliente = new Client(conexao);
    cliente.connect();

    const sql = "SELECT * FROM carros";
    cliente.query(sql, (err, result)=>{
        if(err){
            callback(err, undefined);
        }else{
            callback(undefined, result.rows);            
        }
        cliente.end();
        
    })
}

// Adicionar carros
exports.adicionar = (carro, callback)=>{
    const conn = new Client(conexao);
    conn.connect();

    const sql = "INSERT INTO carros (nome, marca, cor, placa, preco) VALUES ($1, $2, $3, $4, $5) RETURNING *";

    const values = [carro.nome, carro.marca, carro.cor, carro.placa, carro.preco]

    conn.query(sql, values, (err, result) => {
        if(err){
            callback(err, undefined);
        }else{
            callback(undefined, result.rows);            
        }
        conn.end();
    })
}


// localizar carro especificado
exports.buscarPorId = (id, callback)=>{
    const conn = new Client(conexao);
    conn.connect();

    const sql = "SELECT * FROM carros WHERE cod_carro=$1";

    const values = [id];

    conn.query(sql, values, (err, result)=>{
        if(err){
            callback(err, undefined);
        }else{
            callback(undefined, result.rows);            
        }
        conn.end();
        
    })   
}

// atualiza carro especificado
exports.atualizar = (id, carro, callback) => {
    const conn = new Client(conexao);
    conn.connect();
    
    const sql = "UPDATE carros SET nome=$1, marca=$2, cor=$3, placa=$4, preco=$5 WHERE cod_carro=$6 RETURNING *"
    const values = [carro.nome, carro.marca, carro.cor, carro.placa, carro.preco, id];

    conn.query(sql, values, (err, result) => {
        if(err) {
            callback(err, undefined);
        }
        else {
            callback(undefined, result.rows);
        }
        conn.end();
    })
}
 
exports.excluir = (id, callback) => {
    const conn = new Client(conexao);
    conn.connect();
    
    const sql = "DELETE FROM carros WHERE cod_carro=$1 RETURNING *"
    const values = [id];

    conn.query(sql, values, (err, result) => {
        if(err) {
            callback(err, undefined);
        }
        else {
            callback(undefined, result.rows);
        }
        conn.end();
    })
}

