import React from 'react';

import { Container } from './styles';

function cadprof() {
  return (
<Container>
    <main>  
      <form>
        <input type="Nome" id="" placeholder="Nome"/>
        <input type="Telefone" id="" placeholder="Telefone/Cel"/>
        <input type="Endereco" id="" placeholder="Endereço"/>
        <input type="Cidade" id="" placeholder="Cidade"/>
        <input type="Nascimento" id="" placeholder="Data de Nascimento"/>
        <input type="Email" id="" placeholder="Email"/>
        <input type="password" id="" placeholder="Senha"/>
        
        <button>Entrar</button>
         
      </form>
    </main>
</Container>
  );
}

export default cadprof;