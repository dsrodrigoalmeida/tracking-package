import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as pedidoActions from '../actions/pedidoActions'
import PedidoListCaixa from './PedidoListCaixa'
import { bindActionCreators } from 'redux'




class Caixa extends Component {

    
    componentDidMount() {
        this.props.actions.loadPedidos()
    }

    pedidoRow(pedido, index) {
        return <div key={index}>{pedido.nome}</div>;
    }

    

    render() {

      
        return (
            <div className="container">
                <h1>Pedidos Pronto Para Finalizar</h1>
                <PedidoListCaixa pedidos={this.props.pedidos} finalizaPedido={this.props.actions.finalizaPedido}  />
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

export default connect(mapStateToProps, mapDispatchToProps)(Caixa);
