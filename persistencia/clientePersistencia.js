const { Client } = require('pg');

const conexao = {
    user: 'postgres',
    password: 'root',
    host: 'localhost',
    port: 5432,
    database: 'dbApiCarros'
}




exports.listar = (callback)=>{
    const cliente = new Client(conexao);
    cliente.connect();

    const sql = "select * from clientes";
    cliente.query(sql, (err, result)=>{
        if(err){
            callback(err, undefined);
        }else{
            callback(undefined, result.rows);            
        }
        cliente.end();
        
    })
}


// Adicionar clientes
exports.adicionar = (cliente, callback)=>{
    const conn = new Client(conexao);
    conn.connect();

    const sql = "INSERT INTO clientes (nome, email, cpf, telefone, idade, endereco) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *";

    const values = [cliente.nome, cliente.email, cliente.cpf, cliente.telefone, cliente.idade, cliente.endereco]

    conn.query(sql, values, (err, result) => {
        if(err){
            callback(err, undefined);
        }else{
            callback(undefined, result.rows);            
        }
        conn.end();
    })
}


// localizar cliente especificado
exports.buscarPorId = (id, callback)=>{
    const conn = new Client(conexao);
    conn.connect();

    const sql = "SELECT * FROM clientes WHERE cod_cliente=$1";

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

// atualiza cliente especificado
exports.atualizar = (id, cliente, callback) => {
    const conn = new Client(conexao);
    conn.connect();
    
    const sql = "UPDATE clientes SET nome=$1, email=$2, cpf=$3, telefone=$4, idade=$5, endereco=$6 WHERE cod_cliente=$7 RETURNING *"
    const values = [cliente.nome, cliente.email, cliente.cpf, cliente.telefone, cliente.idade, cliente.endereco, id];

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
    
    const sql = "DELETE FROM clientes WHERE cod_cliente=$1 RETURNING *"
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
