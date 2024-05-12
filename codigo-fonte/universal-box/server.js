const express = require('express'),
     Produto = require('./dbFiles/produto'),
     Cliente = require('./dbFiles/cliente'),
     cors = require('cors'),
     bodyParser = require('body-parser'),
     sql = require('mysql2/promise')
     ;

const API_PORT = process.env.PORT || 5000;
const app = express();
const config = {
     host: 'universalbox.c56eiikm60x9.us-east-2.rds.amazonaws.com',
     user: 'admin',
     database: 'UniversalBox',
     password: '12345678',
     port: process.env.DB_PORT || 3307
}

let cliente;
let sessao;
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get('/api', async (req, res) => {
     try {
          let pool = await sql.createPool(config);
          let produtos = await pool.query(`SELECT * from UniversalBox.Produtos`)
          res.send(produtos[0]);

     }
     catch (error) {
          console.log(error);
     }
});

app.post('/criar', async (req, res) => {
     try {
          let pool = await sql.createPool(config);
          let criarProdutos = await pool.query(
               `INSERT INTO UniversalBox.Produtos
          (ProdutoNome, FornecedorNome, ProdutoModelo, ProdutoPreco, Quantidade)
          VALUES
               ('${req.body.ProdutoNome}',
               '${req.body.FornecedorNome}',
               '${req.body.ProdutoModelo}',
               ${req.body.ProdutoPreco},
               ${req.body.ProdutoQuantidade}
          )`,
          )
          let produtos = await pool.query(`SELECT * from UniversalBox.Produtos`)
          res.send(produtos[0]);
     }
     catch (error) {
          console.log(error);
     }
});

app.delete('/deletar', async (req, res) => {
     try {
          console.log(req.body.ProdutoId)
          let pool = await sql.createPool(config);
          let deletarProduto = await pool.query(
               `DELETE FROM UniversalBox.Produtos
               WHERE ProdutoId = ${req.body.ProdutoId}
          `)
     }
     catch (error) {
          console.log(error);
     }
})

app.get('/apicliente', async (req, res) => {
     try {
          let pool = await sql.createPool(config);
          let clientes = await pool.query(`SELECT * from UniversalBox.Clientes`);
          res.send(clientes[0]);
     }
     catch (error) {
          console.log(error);
     }
});


app.post('/criarcliente', async (req, res) => {
     try {
          let pool = await sql.createPool(config);
          let criarClientes = await pool.query(
               `INSERT INTO UniversalBox.Clientes
          (ClienteNome, ClienteCpf, ClienteTelefone, ClienteCep)
          VALUES
                  ('${req.body.ClienteNome}',
                  '${req.body.ClienteCpf}',
                  '${req.body.ClienteTelefone}',
                  '${req.body.ClienteCep}')`
          )
          let clientes = await pool.query(`SELECT * from UniversalBox.Clientes`);
          res.send(clientes[0]);
     }
     catch (error) {
          console.log(error);
     }
});

app.listen(API_PORT, () => console.log(`ouvindo ${API_PORT}`));