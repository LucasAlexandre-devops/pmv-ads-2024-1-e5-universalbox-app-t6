import React, { useState } from 'react'
import Navbar from './Navbar';

function CadastroProduto() {
  const [returnedData, setReturnedData] = useState('teste use state');
  const [produtos, setProdutos] = useState([]);

  const setInput = (e) => {
    const { name, value } = e.target;
    console.log(value);
    if (name === 'ProdutoId' || name === 'ProdutoPreco') {
      setProdutos(prevState => ({
        ...prevState,
        [name]: parseInt(value)
      }));
      return;
    }
    setProdutos(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const createProduto = async () => {
    const newData = await fetch('/criar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        ...produtos
      })
    })
      .then(res => res.json());
    console.log(newData);
    setReturnedData(newData[0])
  }

  return (
    <form>
      <Navbar />

      <div class="form-group">
        <h1>Cadastrar Produto</h1>
        <input type='number'
          class="form-control"
          placeholder="ID"
          name="ProdutoId"
          onChange={setInput} />

        <input
          class="form-control"
          placeholder="Nome"
          name="ProdutoNome"
          onChange={setInput} />

        <input
          class="form-control"
          placeholder="Fornecedor"
          name="FornecedorNome"
          onChange={setInput} />

        <input
          class="form-control"
          placeholder="Modelo"
          name="ProdutoModelo"
          onChange={setInput} />

        <input type='number'
          class="form-control"
          placeholder="Preço"
          name="ProdutoPreco"
          onChange={setInput} />
      </div>
      <button type="button" class="btn btn-primary" onClick={() => createProduto()}>Cadastrar Novo Produto</button>
    </form>
  );
}

export default CadastroProduto
