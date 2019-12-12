import * as types from '../actions/actionTypes';

const INITIAL_STATE = {
    list: [],
    redirect: false
}

export default function pedidoReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.CREATE_PEDIDO_SUCCESS:
            return { ...state, redirect: "createPedido" }
        case types.CREATE_PEDIDO:
            return [...state, Object.assign({}, action.pedido)];
        case types.LOAD_PEDIDOS_SUCCESS:
            return { ...state, list: action.pedidos }
        case types.MANAGE_PEDIDO:
            return { ...state, redirect: action.redirect }
        
        default:
            return state;
    }
}