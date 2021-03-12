import React, { useState } from "react";

import CadProf from "../cadprof";
import CadAlu from "../cadAlu";

import { Container } from "./styles";

function Cadastro() {
  const [isActive1, setActive1] = useState(true);
  const [isActive2, setActive2] = useState();
  const [page, setPage] = useState(<CadAlu />);

  function handleCLick(op) {
    if (op === 1) {
      setActive1(true);
      setActive2(false);
      setPage(<CadAlu />);
    } else {
      setActive1(false);
      setActive2(true);
      setPage(<CadProf />);
    }
  }
  return (
    <Container>
      <main>
        <div className="header">
          <h2>Cadastrar</h2>
          <div className="buttonsCad">
            <button
              onClick={() => handleCLick(1)}
              className={isActive1 ? "active" : null}
            >
              Alunos
            </button>
            <button
              onClick={() => handleCLick(2)}
              className={isActive2 ? "active" : null}
            >
              Professores
            </button>
          </div>
        </div>
        {page}
      </main>
    </Container>
  );
}

export default Cadastro;
