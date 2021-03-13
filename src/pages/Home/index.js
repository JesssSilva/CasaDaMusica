import React, { useState, useEffect } from "react";

import { Containers } from "./styles";
import Logo from "../../assets/Logo.svg";

import Cadastro from "../Cadastro";
import List from "../ListStudents";
function Home() {
  const [page, setPage] = useState(<List />);
  useEffect(() => {
    let students;
    let JSONS = localStorage.getItem("students");
    students = JSON.parse(JSONS);
    if (students) {
      setPage(<List />);
    } else {
      setPage(<Cadastro />);
    }
  }, []);

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
        <img
          src={Logo}
          alt=""
          onClick={() => {
            setPage(<List />);
          }}
        />

        <nav>
          <ul>
            <li
              onClick={() => {
                let students;
                let JSONS = localStorage.getItem("students");
                students = JSON.parse(JSONS);
                if (students) {
                  setPage(<List />);
                } else {
                  alert("Não há alunos Cadastrados");
                }
              }}
            >
              Lista de Alunos
            </li>

            <li onClick={() => handleClick(0)}>Cadastros</li>

            {/* <Link to="/Relatorio">
              <li>Relatório</li>
            </Link> */}
            <li>Sair</li>
          </ul>
        </nav>
      </header>
      <div className="pages">{page && <>{page}</>}</div>
    </Containers>
  );
}

export default Home;
