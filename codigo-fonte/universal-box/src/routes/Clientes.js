import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';

function Clientes() {
    const [returnedData, setReturnedData] = useState('teste use state');
    const [clientes, setClientes] = useState([]);

    const fetchCliente = async () => {
        const newData = await fetch('/apicliente', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(res => res.json());
        console.log(newData);
        setClientes(newData)
    }

    useState(() => fetchCliente(), [])

    return (
        <div>
            <Navbar />
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
                    {
                        clientes.map((cliente) => {
                            return (
                                <tr key={cliente.ClienteId} >
                                    <td>{cliente.ClienteId}</td>
                                    <td>{cliente.ClienteNome}</td>
                                    <td>{cliente.ClienteCpf}</td>
                                    <td>{cliente.ClienteTelefone}</td>
                                    <td>{cliente.ClienteCep}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                <Link to="/cadastrocliente" class="btn btn-primary">Cadastrar Novo Cliente</Link>
            </table>
        </div>
    );
}

export default Clientes