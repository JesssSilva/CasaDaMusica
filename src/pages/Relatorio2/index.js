import React from "react";
import { FiUser, FiPlusCircle } from "react-icons/fi";
import { Container } from "./styles";

function Relatorio2() {
  return (
    <Container>
      <main>
        <header>
          <div className="groupData">
            <FiUser id="user" size={150} />
            <div className="dados">
              <div className="info">
                <label>Nome:</label>
                Mateus Bruno da Silva
              </div>
              <div className="info">
                <label>Aula:</label>
                Teclado
              </div>
              <div className="info">
                <label>Telefone:</label>
                (18)99183-6542
              </div>
            </div>
          </div>
          <FiPlusCircle id="plus" size={80} />
        </header>
        <article>
          <div className="dateLabel">
            <label>Data:</label>
            <input type="date" id="" />
          </div>
          <div className="description">
            <label>Descrição:</label>
            <textarea></textarea>
          </div>
        </article>
      </main>
    </Container>
  );
}

export default Relatorio2;
