import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as pedidoActions from '../actions/pedidoActions'
import PedidoList from './PedidoList'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom';


class Pedidos extends Component {


    componentDidMount() {
        this.props.actions.loadPedidos()
    }

    pedidoRow(pedido, index) {
        return <div key={index}>{pedido.nome}</div>;
    }



    render() {
        return (
            <div className="container">
                <h1>Lista de Pedidos</h1>
                <PedidoList pedidos={this.props.pedidos} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        pedidos: state.pedidos.list
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(pedidoActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pedidos);
