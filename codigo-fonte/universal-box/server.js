const express           = require('express'),
      dbOperation       = require('./dbFiles/dbOperation'),
      Produto           = require('./dbFiles/produto'),
      cors              = require('cors');

const API_PORT = process.env.PORT || 5000;
const app = express();

let cliente;
let sessao;
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.post('/api', async (req, res) => {
     console.log('chamada feita');
     const result = await dbOperation.getProdutos(req.body.name)
     res.send(result.recordset);
});

app.post('/hello', function(req, res){
     console.log('???');
     res.send({result: 'Galo Doido 13'});
});

//dbOperation.createProduto(caixa);

app.listen(API_PORT, () => console.log(`ouvindo ${API_PORT}`));