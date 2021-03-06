import React from 'react';

import {
    BrowserRouter as Router,
    Switch, 
    Route,
  } from "react-router-dom";

  import Login from './pages/Login';
  import Home from './pages/Home';
  import Cadprof from './pages/cadprof';
  import  Relatorio from './pages/Relatorio' ;
  import  Relatorio2 from './pages/Relatorio2' ;
  import Aulas from './pages/Aulas';
  const Routes = () => {
  
  return(
    <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/Home" component={Home} />
          <Route path="/Cadastro" component={Cadprof} />
          <Route path="/Relatorio" component={Relatorio} />
          <Route path="/Relatorio2/:id" component={Relatorio2} />
          <Route path="/Aulas" component={Aulas} />
      </Switch>
    </Router>
  )
}

export default Routes;