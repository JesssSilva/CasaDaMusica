import React, { useState } from "react";

import { Containers } from "./styles";
import Logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import Cadastro from "../Cadastro";


function Home() {
  const [page, setPage] = useState(<Cadastro />);

  function handleClick(op) {
    if (op === 0) {
      setPage(<Cadastro />);
    }
    if (op === 1) {
      setPage();
    }
    if (op === 2) {
      setPage();
    }
    if (op === 3) {
      setPage();
    }
    if (op === 4) {
      setPage();
    }
  }

  return (
    <Containers>
      <header>
        <img src={Logo} alt="" />
        <nav>
          <ul>
            <Link to="/Aulas">
              <li>Aulas</li>
            </Link>

            <li onClick={() => handleClick(0)}>Cadastros</li>

            <Link to="/Relatorio">
              <li>Relatório</li>
            </Link>
            <li>Sair</li>
          </ul>
        </nav>
      </header>
      <div className="pages">
        {page && (
          <>
           
            {page}
          </>
        )}
      </div>
    </Containers>
  );
}

export default Home;
