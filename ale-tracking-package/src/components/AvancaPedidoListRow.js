import React from 'react';
import './Pedido.css'
import FastForwardRoundedIcon from '@material-ui/icons/FastForwardRounded';
import CallMadeRoundedIcon from '@material-ui/icons/CallMadeRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';


const AvancaPedidoListRow = ({ pedido, infoPedido, avancarPedido, excluirPedido }) => {
  if (pedido.status !== "EXCLUIDO" && pedido.status !== "PAGO") {
    if (pedido.exibirPedido === true) {
      return (

        <tr>
          <td>{pedido.id}</td>
          <td>{pedido.nome}</td>
          <td>{pedido.descricao}</td>
          <td className={pedido.status}>{pedido.status}</td>
          <td><span onClick={() => infoPedido(pedido)}>< CallMadeRoundedIcon /></span>
            <span onClick={() => avancarPedido(pedido)}><FastForwardRoundedIcon /></span>
            <span onClick={() => excluirPedido(pedido)}>< CloseRoundedIcon /></span></td>

        </tr >

      );

    } else {
      return (

        <tr>
          <td>{pedido.id}</td>
          <td><h5 className="descricao">Clique no botão da seta para cima </h5></td>
          <td><h5 className="descricao"> para exibir detalhes do pedido</h5></td>
          <td className={pedido.status}>{pedido.status}</td>



          <td><span onClick={() => infoPedido(pedido)}> < CallMadeRoundedIcon /></span>
            <span onClick={() => avancarPedido(pedido)}><FastForwardRoundedIcon /></span>
            <span onClick={() => excluirPedido(pedido)}>< CloseRoundedIcon /></span></td>

        </tr >

      );
    }
  } else {
    return pedido = null;
  }
};

export default AvancaPedidoListRow;