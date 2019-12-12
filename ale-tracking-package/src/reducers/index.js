import {combineReducers} from 'redux';
import pedidos from './pedidoReducer';
import {reducer as formReducer} from 'redux-form';
import {reducer as toastrReducer} from 'react-redux-toastr'

const rootReducer = combineReducers({
    pedidos, form: formReducer, toastr:toastrReducer
});

export default rootReducer;