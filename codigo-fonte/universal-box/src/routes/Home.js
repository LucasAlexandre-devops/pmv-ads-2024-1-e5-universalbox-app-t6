import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Link to="produtos" className="card text-white bg-primary mb-3" styles="max-width: 20rem;">PRODUTOS</Link>
            <Link to="clientes" className="card text-white bg-primary mb-3" styles="max-width: 20rem;">CLIENTES</Link>
        </div>
    )
}

export default Home