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
  const Routes = () => {
  
  return(
    <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/Home" component={Home} />
          <Route path="/Cadastro" component={Cadprof} />
          <Route path="/Relatorio" component={Relatorio} />
          <Route path="/Relatorio2" component={Relatorio2} />
      </Switch>
    </Router>
  )
}

export default Routes;