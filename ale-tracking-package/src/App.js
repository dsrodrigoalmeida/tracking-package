import React from 'react';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import Topo from './components/Topo';
import Rodape from './components/Rodape';
import Pedidos from './components/PedidosPage';
import ManagePedido from './components/ManagePedido';
import Caixa from './components/Caixa';
import AvancaPedido from './components/AvancaPedido';
import { Switch, Route } from 'react-router-dom';
import Messages from './Messages'
import PedidosPage from './components/PedidosPage';


function App() {
  return (
    <div >
      <Topo />
      <Switch>
        <Route exact path="/" component={Pedidos} />
        <Route exact path='/pedido' component={ManagePedido} />
        <Route exact path='/cadastrarpedido' component={PedidosPage} />
        <Route exact path='/avancapedido' component={AvancaPedido} />
        <Route exact path='/caixa' component={Caixa} />
        <Route exact path='/pedidos' component={ManagePedido} />
        <Route path='/pedido/:id' component={ManagePedido} />
         
      </Switch>
      <Rodape />
      <Messages/>
    </div>
  );
}

export default App;
