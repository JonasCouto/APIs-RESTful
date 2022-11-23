const pool = require('../data/db');


exports.listar = (callback)=>{

    pool.connect();

    const sql = "select * from dbApiCarros";
    pool.query(sql, (err, result)=>{
        if(err){
            callback(err, undefined);
        }else{
            callback(undefined, result.rows);            
        }
        pool.close();
        
    })
}