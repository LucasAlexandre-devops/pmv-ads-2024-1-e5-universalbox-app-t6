import React, { useState } from 'react';
import Navbar from './Navbar';

function CadastroFornecedor() {
  const [returnedData, setReturnedData] = useState('teste use state');
  const [fornecedores, setFornecedores] = useState({ FornecedorId: '', FornecedorEmpresa: '', FornecedorResponsavel: '', FornecedorTelefone: '', FornecedorCEP: '' });

  const setInput = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setFornecedores(prevState => ({
      ...prevState,
      [name]: name === 'FornecedorId' || name === 'FornecedorCNPJ' ? parseInt(value) : value
    }));
  }

  const createFornecedor = async () => {
    const newData = await fetch('/criar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(fornecedores)
    })
      .then(res => res.json());
    console.log(newData);
    setReturnedData(newData[0])
  }

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h1 className="card-title">Cadastrar Fornecedor</h1>
                <div className="form-group">
                  <input
                    type='number'
                    className="form-control mb-3"
                    placeholder="ID"
                    name="FornecedorId"
                    value={fornecedores.FornecedorId}
                    onChange={setInput} />

                  <input
                    className="form-control mb-3"
                    placeholder="Empresa"
                    name="FornecedorEmpresa"
                    value={fornecedores.FornecedorEmpresa}
                    onChange={setInput} />

                  <input
                    className="form-control mb-3"
                    placeholder="Responsavel"
                    name="FornecedorResponsavel"
                    value={fornecedores.FornecedorResponsavel}
                    onChange={setInput} />

                  <input
                    className="form-control mb-3"
                    placeholder="Telefone"
                    name="FornecedorTelefone"
                    value={fornecedores.FornecedorTelefone}
                    onChange={setInput} />

                  <input
                    type='number'
                    className="form-control mb-3"
                    placeholder="CNPJ"
                    name="FornecedorCNPJ"
                    value={fornecedores.FornecedorCNPJ}
                    onChange={setInput} />
                </div>
                <button
                  type="button"
                  className="btn btn-primary btn-block"
                  onClick={createFornecedor}>
                  Cadastrar Novo Fornecedor
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CadastroFornecedor;