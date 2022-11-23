const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const porta = 3000;

//rotas
const carroRota = require('./rotas/carrosRota')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})); 

app.use('/carros', carroRota);









// Teste para verificar servidor Node na porta 3000
app.get('/', function(req, res) {
  res.send('hello world');
});


app.listen(porta, ()=> {
    console.log(`Servidor rodando na porta localhost:${porta}`)
  })