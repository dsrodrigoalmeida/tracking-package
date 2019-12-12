import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as pedidoActions from '../actions/pedidoActions'
import AvancaPedidoList from './AvancaPedidoList'
import { bindActionCreators } from 'redux'




class AvancaPedido extends Component {

    
    componentDidMount() {
        this.props.actions.loadPedidos()
        
    }

    pedidoRow(pedido, index) {
        
        return <div key={index}>{pedido.nome}</div>;
    }

    

    render() {

      
        return (
            <div className="container">
                <h1>Pedidos</h1>
                <AvancaPedidoList pedidos={this.props.pedidos} infoPedido={this.props.actions.infoPedido}  
                avancarPedido={this.props.actions.avancarPedido}  excluirPedido={this.props.actions.excluirPedido}  />
                
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

export default connect(mapStateToProps, mapDispatchToProps)(AvancaPedido);
