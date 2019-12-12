import React from 'react';
import { reduxForm, Field } from 'redux-form';

let PedidoForm = (props) => {
    props.change("status", 'NOVO')
    props.change("exibirPedido", false)
    const { handleSubmit } = props

   
    return (
        <form onSubmit={handleSubmit}>
            <Field name='id' component='input'
                placeholder='CPF' />
            
            <Field name='nome' component='input'
                placeholder='Nome' />
            
            <Field name='descricao' component='textarea'
                placeholder='Descrição' />
            
            <Field name='status' component='input' 
            type='hidden'/>
            
            <Field name='exibirPedido' component='input' 
            type='hidden'/>
            <input type="submit" />
        </form>
    )
}
export default reduxForm({ form: 'pedidoForm' })(PedidoForm)