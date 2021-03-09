import React from "react";
import Fones from "../../assets/Fones.svg";
import { Link } from "react-router-dom";
import { Container } from "./styles";

function home() {
  return (
    <Container>
      <main>
        <img src={Fones} alt="" />
        <form>
          <input type="email" id="" placeholder="Email" />
          <input type="password" id="" placeholder="Senha" />
          <Link to="/Home">
            <button>Entrar</button>
          </Link>
        </form>
      </main>
    </Container>
  );
}

export default home;
