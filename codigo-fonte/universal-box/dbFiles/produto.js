class Produto{
    constructor(ProdutoId, ProdutoNome, FornecedorNome, ProdutoModelo, ProdutoPreco){
        this.ProdutoId = ProdutoId;
        this.ProdutoNome = ProdutoNome;
        this.FornecedorNome = FornecedorNome;
        this.ProdutoModelo = ProdutoModelo;
        this.ProdutoPreco = ProdutoPreco;
    }
}

module.exports = Produto;