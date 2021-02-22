import React from 'react';

import { Container } from './styles';
import Logo from '../../assets/Logo.svg';
import  {  Link  }  from  'react-router-dom' ;
function home() {
  return (
    <Container>
      <header>
      <img src={Logo} alt=""/>
      <nav>
        <ul>
          <Link to ="/Relatorio" >
          <li>
            Relatório
          </li>
          </Link>
          <Link to ="/Aulas">
          <li>
            Aulas
          </li>
          </Link>
          < Link  to = "/Cadastro" >
            <li>
              Cadastro
            </li>
          </Link>
         
          <li>
            Login
          </li>
        </ul>
      </nav>
      </header>
    </Container>
  );
}

export default home;