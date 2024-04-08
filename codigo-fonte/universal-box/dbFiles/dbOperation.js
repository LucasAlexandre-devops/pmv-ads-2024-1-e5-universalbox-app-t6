const config = require('./dbConfig'),
    sql = require('mssql');

const getProdutos = async () => {
    try {
        let pool = await sql.connect(config);
        let produtos = await pool.request().query(`SELECT * from Produtos`)
        return produtos;
    }
    catch (error) {
        console.log(error);
    }
}

const createProduto = async (Produto) => {
    try {
        let pool = await sql.connect(config);
        let produtos = await pool.request().query(`INSERT INTO Produtos VALUES
            (${Produto.ProdutoId}, 
            '${Produto.ProdutoNome}', 
            '${Produto.FornecedorNome}', 
            '${Produto.ProdutoModelo}', 
            ${Produto.ProdutoPreco})`
        )
        return produtos;
    }
    catch (error) {
        console.log(error);
    }
}

const getClientes = async () => {
    try {
        let pool = await sql.connect(config);
        let clientes = await pool.request().query(`SELECT * from Clientes`)
        return clientes;
    }
    catch (error) {
        console.log(error);
    }
}

const createCliente = async (Cliente) => {
    try {
        let pool = await sql.connect(config);
        let clientes = await pool.request().query(`INSERT INTO Clientes VALUES
            (${Cliente.ClienteId}, 
            '${Cliente.ClienteNome}',
            '${Cliente.ClienteCpf}',
            '${Cliente.ClienteTelefone}',
            '${Cliente.ClienteCep}')`
        )
        return clientes;
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = {
    createProduto,
    getProdutos,
    createCliente,
    getClientes
}