const express           = require('express'),
      dbOperation       = require('./dbFiles/dbOperation'),
      Produto           = require('./dbFiles/produto'),
      cors              = require('cors');

let caixa = new Produto(2, 'Caixa', 'Caixa Universal', 'Caixa Preta', 30.50);

console.log(caixa);

dbOperation.getProdutos().then(res => {
     console.log(res.recordset);
})