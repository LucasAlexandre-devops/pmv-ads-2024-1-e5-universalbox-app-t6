import React from 'react'
import {Link} from 'react-router-dom'
import Produtos from './Produtos'

const Home = () => {
    return (
        <div>
            <Link to="produtos">PRODUTOS</Link>
        </div>
    )
}

export default Home