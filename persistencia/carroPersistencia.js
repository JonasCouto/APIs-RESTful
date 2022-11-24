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

    const sql = "select * from carros";
    cliente.query(sql, (err, result)=>{
        if(err){
            callback(err, undefined);
        }else{
            callback(undefined, result.rows);            
        }
        cliente.end();
        
    })
}