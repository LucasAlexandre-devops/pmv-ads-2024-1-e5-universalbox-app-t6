const config                    = require ('./dbConfig'),
      sql                       = require('mssql');

const getProdutos = async(ProdutoNome) => {
    try{
        let pool = await sql.connect(config);
        let produtos = await pool.request().query(`SELECT * from Produtos WHERE ProdutoNome = ${ProdutoNome}`)
        console.log(produtos);
        return produtos;
    }
    catch(error){
        console.log(error);
    }
}

const createProduto = async(Produto) => {
    try{
        let pool = await sql.connect(config);
        let produtos = pool.request()
        .query(`INSERT INTO Produtos VALUES
        (${Produto.ProdutoId}, 
            '${Produto.ProdutoNome}', 
            '${Produto.FornecedorNome}', 
            '${Produto.ProdutoModelo}', 
            ${Produto.ProdutoPreco})
        `)
        return produtos;
    }
    catch(error){
        console.log(error);
    }
}

module.exports = {
    createProduto,
    getProdutos
}