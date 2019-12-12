import React from 'react';
import PedidoListCaixaRow from './PedidoListCaixaRow';


const PedidoListCaixa = ({ pedidos, finalizaPedido }) => {
  return (
    <table>
      <thead>
        <tr><td>Nome</td><td>Status do Pedido</td><td>Ações</td></tr>
      </thead>
      <tbody>
        {pedidos.map(pedido => <PedidoListCaixaRow key={pedido.id} pedido={pedido} finalizaPedido={finalizaPedido}  />)}
        
      </tbody>
    </table>
  );
};

export default PedidoListCaixa;