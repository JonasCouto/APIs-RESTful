const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const cors = require('cors');
const porta = 3000;


//rotas
const carroRota = require('./rotas/carrosRota')
const clienteRota = require('./rotas/clienteRota')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false})); 
app.use(cors());

//ROTAS
app.use('/carros', carroRota);
app.use('/clientes', clienteRota);









// Teste para verificar servidor Node na porta 3000
app.get('/', function(req, res) {
  res.send('hello world');
});


app.listen(porta, ()=> {
    console.log(`Servidor rodando na porta localhost:${porta}`)
  })