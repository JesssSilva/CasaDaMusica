import React from "react";

import { Form, Input } from "@rocketseat/unform";

import { Aluno } from "./styles";

function CadAluno() {
  async function saveStudent(data) {
    if (data) {
      if (data.name) {
        let students = [];
        let JSONS = localStorage.getItem("students");
        students = JSON.parse(JSONS);
        if (students) {
          students.push(data)
          localStorage.setItem("students", JSON.stringify(students));
          alert('Aluno cadastrado com sucesso');
        } else {
          students = [data];
          localStorage.setItem("students", JSON.stringify(students));
          alert('Aluno cadastrado com sucesso');
        }
      } else {
        alert("nome é obrigatório");
      }
    }
  }
  return (
    <Aluno>
      <main>
        <h1>Cadastro de Alunos</h1>
        <Form onSubmit={saveStudent}>
          <Input type="Nome" name="name" placeholder="Nome" />
          <Input type="Telefone" name="phone" placeholder="Telefone/Cel" />
          <Input type="Endereco" name="endereco" placeholder="Endereço" />
          <Input type="Cidade" name="city" placeholder="Cidade" />
          <Input
            type="Nascimento"
            name="date-of-birth"
            placeholder="Data de Nascimento"
          />
          <Input type="Email" name="e-mail" placeholder="Email" />
          <Input type="password" name="password" placeholder="Senha" />
          <button type="submit">Salvar</button>
        </Form>
      </main>
    </Aluno>
  );
}

export default CadAluno;
