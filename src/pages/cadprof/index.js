import React from "react";

import { Form, Input } from "@rocketseat/unform";

import { Professor } from "./styles";

function Cadprof() {
  async function saveTeacher(data) {
    if (data) {
      if (data.name) {
        let teachers = [];
        let JSONS = localStorage.getItem("teachers");
        teachers = JSON.parse(JSONS);
        if (teachers) {
          teachers.push(data);
          localStorage.setItem("teachers", JSON.stringify(teachers));
          alert('professor cadastrado com sucesso');
        } else {
          teachers = [data];
          localStorage.setItem("teachers", JSON.stringify(teachers));
          alert('professor cadastrado com sucesso');
        }
      } else {
        alert("nome é obrigatório");
      }
    }
  }
  return (
    <Professor>
      <main>
        <h1>Cadastro de Professores</h1>
        <Form onSubmit={saveTeacher}>
          <Input type="Nome" name="name" placeholder="Nome" />
          <Input type="Telefone" name="phone" placeholder="Telefone/Cel" />
          <Input type="Endereco" name="endereco" placeholder="Endereço" />
          <Input type="Cidade" name="city" placeholder="Cidade" />
          <Input
            type="Nascimento"
            name="date-of-birth"
            placeholder="Data de Nascimento"
          />
          <Input type="Email" name="email" placeholder="Email" />
          <Input type="password" name="password" placeholder="Senha" />
          <button type="submit">Salvar</button>
        </Form>
      </main>
    </Professor>
  );
}

export default Cadprof;
