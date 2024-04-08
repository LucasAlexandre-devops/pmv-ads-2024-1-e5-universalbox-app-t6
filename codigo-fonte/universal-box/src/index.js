import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home';
import Produtos from './routes/Produtos';
import CadastroProduto from './routes/CadastroProduto';
import Navbar from './routes/Navbar';
import Clientes from './routes/Clientes';
import CadastroCliente from './routes/CadastroCliente';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "produtos",
    element: <Produtos />
  },
  {
    path: "cadastroproduto",
    element: <CadastroProduto />
  },
  {
    path: "navbarcomponent",
    element: <Navbar />
  },
  {
    path: "clientes",
    element: <Clientes />
  },
  {
    path: "cadastrocliente",
    element: <CadastroCliente />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
