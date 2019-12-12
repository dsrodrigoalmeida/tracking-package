import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createPedido } from '../actions/pedidoActions';
import PedidoForm from './PedidoForm';
import { Redirect } from 'react-router-dom';

class ManagePedido extends Component {

    render() {
        
            if (this.props.redirect) {
                return <Redirect to='/' />
            }
        
            return (
                <div className="container">
                    <h1>Cadastrar Novo Pedido</h1>
                    <PedidoForm onSubmit={this.props.createPedido} />
                </div>
            )
        
    }
}

function mapStateToProps(state) {
    return { redirect: state.pedidos.redirect };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ createPedido }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagePedido);