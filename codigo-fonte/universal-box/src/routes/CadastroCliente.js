import React, { useState } from 'react'
import Navbar from './Navbar';

function CadastroCliente() {
    const [returnedData, setReturnedData] = useState('teste use state');
    const [clientes, setClientes] = useState([]);

    const setInput = (e) => {
        const { name, value } = e.target;
        console.log(value);
        if (name === 'ClienteId') {
            setClientes(prevState => ({
                ...prevState,
                [name]: parseInt(value)
            }));
            return;
        }
        setClientes(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const createCliente = async () => {
        console.log(clientes)
        const newData = await fetch('/criarcliente', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                ...clientes
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
                <h1>Cadastrar Cliente</h1>
                <input type='number'
                    class="form-control"
                    placeholder="ID"
                    name="ClienteId"
                    onChange={setInput} />

                <input
                    class="form-control"
                    placeholder="Nome"
                    name="ClienteNome"
                    onChange={setInput} />

                <input
                    class="form-control"
                    placeholder="CPF"
                    name="ClienteCpf"
                    onChange={setInput} />

                <input
                    class="form-control"
                    placeholder="Telefone"
                    name="ClienteTelefone"
                    onChange={setInput} />

                <input
                    class="form-control"
                    placeholder="CEP"
                    name="ClienteCep"
                    onChange={setInput} />
            </div>
            <button type="button" class="btn btn-primary" onClick={() => createCliente()}>Cadastrar Novo cliente</button>
        </form>
    );
}

export default CadastroCliente
