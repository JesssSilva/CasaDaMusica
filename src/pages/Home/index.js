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
          <li>
            Relatório
          </li>
          <li>
            Aulas
          </li>
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