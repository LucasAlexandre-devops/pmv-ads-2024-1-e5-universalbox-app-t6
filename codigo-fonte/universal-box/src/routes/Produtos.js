import React, {useState} from 'react'

function Produtos() {

    const [returnedData, setReturnedData] = useState(['teste use state']);
    const [produto, setProduto] = useState([{ProdutoId: 0, ProdutoNome: '', FornecedorNome: '', ProdutoModelo:'', ProdutoPreco: 0}]);

    const setInput = (e) => {
        const {name, value} = e.target;
        console.log(value);
        if(name === 'ProdutoId' || name === 'ProdutoPreco'){
            setProduto(prevState => ({
                ...prevState,
                [name]: parseInt(value)
            }));
            return;
        }
        setProduto(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const fetchData = async() => {
      const newData = await fetch('/api', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: produto.ProdutoNome
        })
      })
      .then(res => res.json());
      console.log(newData);
      setReturnedData(newData[0])
    }


    return (
      <div className="App">
        <input 
          type='number' 
          name='ProdutoId' 
          placeholder='ProdutoId' 
          onChange={setInput}>
        </input>
  
        <input 
          name='ProdutoNome' 
          placeholder='ProdutoNome' 
          onChange={setInput}>
        </input>
          
        <input 
          name='FornecedorNome' 
          placeholder='FornecedorNome' 
          onChange={setInput}>
        </input>
  
        <input 
          name='ProdutoModelo' 
          placeholder='ProdutoModelo' 
          onChange={setInput}>
        </input>
  
        <input 
          type='number' 
          name='ProdutoPreco' 
          placeholder='ProdutoPreco' 
          onChange={setInput}>
        </input>
  
        <button onClick={() => fetchData()}>Clique</button>
        <button onClick={() => fetchData()}>Criar Produto</button>
  
        <p>ProdutoId: {returnedData.ProdutoId}</p>
        <p>ProdutoNome: {returnedData.ProdutoNome}</p>
        <p>FornecedorNome: {returnedData.FornecedorNome}</p>
        <p>ProdutoModelo: {returnedData.ProdutoModelo}</p>
        <p>ProdutoPreco: {returnedData.ProdutoPreco}</p>
  
        {returnedData}
      </div>
    );
}

export default Produtos