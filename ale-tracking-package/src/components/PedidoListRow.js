import React from 'react';
import './Pedido.css'

const PedidoListRow = ({ pedido }) => {
  if (pedido.status !== "EXCLUIDO" && pedido.status !== "PAGO") {

    return (

      <tr>
        <td>{pedido.nome}</td>
        <td className={pedido.status}>{pedido.status}</td>

      </tr>

    );
  } else {
    return pedido = null;
  }
};

export default PedidoListRow;