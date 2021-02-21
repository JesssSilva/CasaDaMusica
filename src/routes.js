import React from 'react';

import {
    BrowserRouter as Router,
    Switch, 
    Route,
  } from "react-router-dom";

  import Login from './pages/Login';
  import Home from './pages/Home';
  import Cadprof from './pages/cadprof';
  const Routes = () => {
  
  return(
    <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/Home" component={Home} />
          <Route path="/Cadastro" component={Cadprof} />
      </Switch>
    </Router>
  )
}

export default Routes;