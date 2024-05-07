import React, { useState, useEffect  } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';

function Fornecedores() {
  const [fornecedores, setFornecedores] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api');
        if (!response.ok) {
          throw new Error('Erro ao obter os dados');
        }
        const data = await response.json();
        setFornecedores(data);
      } catch (error) {
        console.error('Erro:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h2>Lista de Fornecedores</h2>
        <Link to="/cadastrofornecedor" className="btn btn-primary mb-3">Cadastrar Novo Fornecedor</Link>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Empresa</th>
              <th scope="col">Responsável</th>
              <th scope="col">Telefone</th>
              <th scope="col">CNPJ</th>
            </tr>
          </thead>
          <tbody>
            {fornecedores.map((fornecedor) => (
              <tr key={fornecedor.FornecedorId}>
                <td>{fornecedor.FornecedorId}</td>
                <td>{fornecedor.FornecedorEmpresa}</td>
                <td>{fornecedor.FornecedorResponsavel}</td>
                <td>{fornecedor.FornecedorTelefone}</td>
                <td>{fornecedor.FornecedorCNPJ}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Fornecedores