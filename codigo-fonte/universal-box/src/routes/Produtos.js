import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';

function Produtos() {

  const [returnedData, setReturnedData] = useState('teste use state');
  const [produtos, setProdutos] = useState([]);

  const fetchData = async () => {
    const newData = await fetch('/api', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(res => res.json());
    console.log(newData);
    setProdutos(newData)
  }

  useState(() => fetchData(), [])

  return (
    <div>
      <Navbar />
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nome</th>
            <th scope="col">Fornecedor</th>
            <th scope="col">Modelo</th>
            <th scope="col">Preço</th>
          </tr>
        </thead>
        <tbody>
          {
            produtos.map((produto) => {
              return (
                <tr key={produto.ProdutoId} >
                  <td>{produto.ProdutoId}</td>
                  <td>{produto.ProdutoNome}</td>
                  <td>{produto.FornecedorNome}</td>
                  <td>{produto.ProdutoModelo}</td>
                  <td>{produto.ProdutoPreco}</td>
                </tr>
              )
            })
          }
        </tbody>
        <Link to="/cadastroproduto" class="btn btn-primary">Cadastrar Novo Produto</Link>
      </table>
    </div>
  );
}

export default Produtos