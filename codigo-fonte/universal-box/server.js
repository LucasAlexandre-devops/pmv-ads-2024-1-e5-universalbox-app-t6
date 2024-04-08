const express = require('express'),
     dbOperation = require('./dbFiles/dbOperation'),
     Produto = require('./dbFiles/produto'),
     Cliente = require('./dbFiles/cliente'),
     cors = require('cors');

const API_PORT = process.env.PORT || 5000;
const app = express();

let cliente;
let sessao;
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.get('/api', async (req, res) => {
     const result = await dbOperation.getProdutos(res.body);
     res.send(result.recordset);
});

app.post('/criar', async (req, res) => {
     await dbOperation.createProduto(req.body);
     const result = await dbOperation.getProdutos(req.body.ProdutoNome);
     res.send(result.recordset);
});

app.get('/apicliente', async (req, res) => {
     const result = await dbOperation.getClientes(res.body);
     res.send(result.recordset);
});

app.post('/criarcliente', async (req, res) => {
     await dbOperation.createCliente(req.body);
     const result = await dbOperation.getClientes(req.body.ClienteNome);
     res.send(result.recordset);
});

dbOperation.getClientes().then(res => {
});

app.listen(API_PORT, () => console.log(`ouvindo ${API_PORT}`));