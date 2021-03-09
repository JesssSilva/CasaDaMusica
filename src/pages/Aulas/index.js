import React from "react";
import { Container } from "./styles";

// import { Container } from './styles';

function Aulas() {
  return (
    <Container>
      <main>
        <form>
          <input type="Professor" id="" placeholder="Professor" />
          <input type="Horario" id="" placeholder="Horario das Aulas" />
          <label for="Aluno"> Instrumentos: </label>
          <select name="Instrumentos" id="Instrumentos">
            <option value="Instrumento1">-</option>
            <option value="Instrumento1">Viola Caipira</option>
            <option value="Instrumento2">Violão</option>
            <option value="Instrumento3">Teclado</option>
            <option value="Instrumento4">Bateria</option>
            <option value="Instrumento5">Contra-baixo</option>
            <option value="Instrumento6">Ukulele</option>
            <option value="Instrumento7">Violoncelo</option>
            <option value="Instrumento8">Guitarra </option>
            <option value="Instrumento9">Cajon</option>
            <option value="Instrumento10">Percussão</option>
            <option value="Instrumento11">Cavaquinho</option>
          </select>
          <button>Cadastrar</button>
        </form>
      </main>
    </Container>
  );
}

export default Aulas;
