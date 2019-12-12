import * as types from './actionTypes';
import Axios from 'axios';
import { reset as resetForm} from 'redux-form';
import { toastr } from 'react-redux-toastr';

const URL = 'http://localhost:3004/pedidos'


export function createPedido(pedido) {
    return dispatch => {
        Axios.post(URL, pedido)
            .then(request => {
                toastr.success('Cadastro realizado com sucesso')
                dispatch(resetForm('pedidoForm'))
                dispatch({ type: types.CREATE_PEDIDO_SUCCESS })

            })
    }

}

export function finalizaPedido(pedido) {
    if (pedido.status === "PRONTO") {
        pedido.status = "PAGO";
    }
    return dispatch => {
        Axios.put(URL + "/" + pedido.id, pedido)
            .then(request => {
                dispatch({ type: types.UPDATE_PEDIDO_SUCCESS })
                window.location.reload()
            })
    }
}

export function avancarPedido(pedido) {

    switch (pedido.status) {
        case "NOVO":
            pedido.status = "PREPARANDO"
            break;
        case "PREPARANDO":
            pedido.status = "CONFERENCIA"
            break;
        case "CONFERENCIA":
        case "PRONTO":
            pedido.status = "PRONTO"
            break;
        default:
            console.log("O código não era pra chegar aqui");

    }

    return dispatch => {
        Axios.put(URL + "/" + pedido.id, pedido)
            .then(request => {
                dispatch({ type: types.UPDATE_PEDIDO_SUCCESS })
                window.location.reload()
            })
    }
}

export function excluirPedido(pedido) {
    pedido.status = "EXCLUIDO";
    return dispatch => {
        Axios.put(URL + "/" + pedido.id, pedido)
            .then(request => {
                dispatch({ type: types.UPDATE_PEDIDO_SUCCESS })
                window.location.reload()
            })
    }
}

export function infoPedido(pedido) {
    if (pedido.exibirPedido === true) {
        pedido.exibirPedido = false;
    } else {
        pedido.exibirPedido = true;
    }
    return dispatch => {
        Axios.put(URL + "/" + pedido.id, pedido)
            .then(request => {
                dispatch({ type: types.UPDATE_PEDIDO_SUCCESS })
                window.location.reload()

            })

    }
}

export function loadPedidos() {
    return dispatch => {
        Axios.get(URL)
            .then(pedidos => {
                dispatch(loadPedidosSuccess(pedidos.data))
            })
    }
}

export function loadPedidosSuccess(pedidos) {
    return { type: types.LOAD_PEDIDOS_SUCCESS, pedidos };
}


export function managePedido(redirect) {
    return { type: types.MANAGE_PEDIDO, redirect }
}
