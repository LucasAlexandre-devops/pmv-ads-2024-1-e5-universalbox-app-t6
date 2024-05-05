import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function Clientes() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await fetch('/apicliente');
        if (!response.ok) {
          throw new Error('Erro ao obter os dados');
        }
        const data = await response.json();
        setClientes(data);
      } catch (error) {
        console.error('Erro:', error);
      }
    };

    fetchClientes();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h2>Lista de Clientes</h2>
        <Link to="/cadastrocliente" className="btn btn-primary mb-3">Cadastrar Novo Cliente</Link>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nome</th>
              <th scope="col">CPF</th>
              <th scope="col">Telefone</th>
              <th scope="col">CEP</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <tr key={cliente.ClienteId}>
                <td>{cliente.ClienteId}</td>
                <td>{cliente.ClienteNome}</td>
                <td>{cliente.ClienteCpf}</td>
                <td>{cliente.ClienteTelefone}</td>
                <td>{cliente.ClienteCep}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Clientes;