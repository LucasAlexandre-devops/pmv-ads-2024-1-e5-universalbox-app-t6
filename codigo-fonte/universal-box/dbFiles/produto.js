class Produto {
    constructor(ProdutoId, ProdutoNome, FornecedorNome, ProdutoModelo, ProdutoPreco, ProdutoQuantidade) {
        this.ProdutoId = ProdutoId;
        this.ProdutoNome = ProdutoNome;
        this.FornecedorNome = FornecedorNome;
        this.ProdutoModelo = ProdutoModelo;
        this.ProdutoPreco = ProdutoPreco;
        this.ProdutoQuantidade = ProdutoQuantidade;
    }
}

module.exports = Produto;