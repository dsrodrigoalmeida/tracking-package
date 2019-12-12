import React from 'react';
import AvancaPedidoListRow from './AvancaPedidoListRow';

const AvancaPedidoList = ({ pedidos, infoPedido, avancarPedido, excluirPedido }) => {
    return (
        <table>
            <thead>
                <tr><td>CPF</td><td>Nome</td><td>Descrição</td><td>Status do Pedido</td><td>Ações</td></tr>
            </thead>
            <tbody>
                {pedidos.map(pedido => <AvancaPedidoListRow key={pedido.id} pedido={pedido} infoPedido={infoPedido}
                 avancarPedido={avancarPedido} excluirPedido={excluirPedido} />)}
            </tbody>
        </table>
    );
};

export default AvancaPedidoList;