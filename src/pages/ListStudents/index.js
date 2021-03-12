import React, { useState, useEffect } from "react";

import { Container } from "./styles";
import { Link } from "react-router-dom";
function ListStudents() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    let students;
    let JSONS = localStorage.getItem("students");
    students = JSON.parse(JSONS);
    setStudents(students);
   
  }, []);

  return (
    <Container>
      <h1>Lista de Alunos</h1>
      <div className="div-table">
        <table className="table">
          <tr>
            <th>Aluno</th>
            <th>Opções</th>
          </tr>
        </table>
        <div className="div-table-sla">
          <table className="table2">
            {students.map((student,index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>
                  <div className="groupButtonTable">
                    <Link to={`/Relatorio2/${index}`}><button>Relatório</button></Link>
                    <button>Deletar</button>
                  </div>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </Container>
  );
}

export default ListStudents;
