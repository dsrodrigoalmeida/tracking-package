import React from 'react';
import './Pedido.css';
import FastForwardRoundedIcon from '@material-ui/icons/FastForwardRounded';

const PedidoListCaixaRow = ({ pedido, finalizaPedido }) => {
    if (pedido.status === "PRONTO") {

        return (

            <tr>
                <td>{pedido.nome}</td>
                <td className={pedido.status}>{pedido.status}</td>
                <td><span onClick={() => finalizaPedido(pedido)}>< FastForwardRoundedIcon /></span></td>
                
            </tr>

        );
    } else {
        return pedido = null;
    }
};

export default PedidoListCaixaRow;