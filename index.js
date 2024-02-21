// Express lib
const express = require('express');
// Função do express
const app = express();
// Caminho relativo
const path = require('path');
// Criando Rotas
const router = express.Router()

// Criando função da rota
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'./index.html'));
    console.log(__dirname);
    console.log("index");
});

// Criando outra rota
router.get('/sobre', function(req, res) {
    res.sendFile(path.join(__dirname+'./sobre.html'));
    console.log(__dirname);
    console.log("index");
});

router.get('/contatos', function(req, res) {
    res.sendFile(path.join(__dirname+'./contatos.html'));
    console.log(__dirname);
    console.log("index");
});


app.use('/', router);
app.listen(process.env.port || 3000);

console.log("Server rodando");
