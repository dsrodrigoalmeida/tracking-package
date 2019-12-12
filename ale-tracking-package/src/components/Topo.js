import React from 'react'
import { Link } from 'react-router-dom'

function Topo() {
    return (
        <nav className="indigo darken-4" role="navigation">
            <div className="nav-wrapper container">
                <a id="logo-container" href="/#" className="brand-logo">Ale Tracking Package</a>
                <ul className="right">
                    <li><Link to="/pedido">Cadastrar Pedido</Link></li>
                    <li><Link to="/">Acompanhamento de Pedidos</Link></li>
                    <li><Link to="/avancapedido">Avançar Estado de Pedido</Link></li>
                    <li><Link to="/caixa">Caixa</Link></li>
                </ul>

            </div>
        </nav>
    )
}

export default Topo