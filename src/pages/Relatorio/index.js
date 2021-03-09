import React from "react";

import { Container } from "./styles";
import { Link } from "react-router-dom";

function Relatorio() {
  return (
    <Container>
      <main>
        <label for="Aluno"> Nome do Aluno: </label>
        <select name="Aluno" id="Aluno">
          <option value="Nome1">Lucas</option>
          <option value="Nome2">João</option>
          <option value="Nome3">Luana</option>
          <option value="Nome4">Julia</option>
        </select>

        <Link to="/Relatorio2">
          <button>Prosseguir</button>
        </Link>
      </main>
    </Container>
  );
}

export default Relatorio;
