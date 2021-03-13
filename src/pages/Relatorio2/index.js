/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { FiUser, FiPlusCircle, FiArrowLeft } from "react-icons/fi";
import { Container } from "./styles";
import { Link } from "react-router-dom";
function Relatorio2(props) {
  const [student, setStudents] = useState([]);
  const [report, setReport] = useState([]);
  useEffect(() => {
    getInfo();
    getReports();
  }, []);

  function getInfo() {
    let id = props.match.params.id;
    let students;
    let JSONS = localStorage.getItem("students");
    students = JSON.parse(JSONS);
    setStudents(students[id]);
  }

  function getReports() {
    let reports;
    let JSONSreports = localStorage.getItem("reports");
    reports = JSON.parse(JSONSreports);
    // if (reports) {
    //   reports.forEach((r) => {
    //     console.log(r);
    //     if (r.data_report && r.description) {
    //       document.getElementById(`data${r.id_report}`).value = r.data_report;
    //       document.getElementById(`descricao${r.id_report}`).value =
    //         r.description;
    //     }
    //   });
    // }

    setReport(reports);
  }

  function handleAddReport() {
    let data = {
      id_aluno: null,
      id_report: null,
      data_report: null,
      description: null,
    };
    let reports = [];
    let JSONS = localStorage.getItem("reports");
    reports = JSON.parse(JSONS);
    if (!reports) {
      reports = [data];
      localStorage.setItem("reports", JSON.stringify(reports));
      getReports();
    } else {
      reports.push(data);
      localStorage.setItem("reports", JSON.stringify(reports));
      getReports();
    }
  }

  function handleDelReport(id) {
    console.log(id);
    report.splice(id, 1);
    setReport(report);
    localStorage.setItem("reports", JSON.stringify(report));
    alert("Relatório removido com sucesso");
    getReports();
  }

  function handleSaveReport(id) {
    console.log(id);
    let data_report = document.getElementById(`data${id}`).value;
    let description = document.getElementById(`descricao${id}`).value;
    let id_aluno = props.match.params.id;
    let id_report = id;

    let data = {
      id_aluno,
      id_report,
      data_report,
      description,
    };

    let reports = [];
    let JSONS = localStorage.getItem("reports");
    reports = JSON.parse(JSONS);

    reports[id].id_aluno = data.id_aluno;
    reports[id].id_report = data.id_report;
    reports[id].data_report = data.data_report;
    reports[id].description = data.description;

    reports[id] = data;
    localStorage.setItem("reports", JSON.stringify(reports));
    getReports();
  }
  return (
    <Container>
      <div className="menu">
        <Link to="/Home">
          <div className="groupMenu">
            <FiArrowLeft id="arrow" size={45} />
            <h2>Voltar</h2>
          </div>
        </Link>
      </div>
      <main>
        <header>
          <div className="groupData">
            <FiUser id="user" size={150} />
            <div className="dados">
              <div className="info">
                <label>Nome:</label>
                {student.name}
              </div>
              <div className="info">
                <label>Aula:</label>
              </div>
              <div className="info">
                <label>Telefone:</label>
                {student.phone}
              </div>
            </div>
          </div>
          <FiPlusCircle
            onClick={() => {
              handleAddReport();
            }}
            id="plus"
            size={80}
          />
        </header>
        <div className="articles">
          {report &&
            report.map((reports, index) => (
              <article key={index}>
                <div className="dateLabel">
                  <label>Data:</label>
                  <input
                    type="date"
                    name="data"
                    id={`data${index}`}
                  />
                </div>
                <div className="description">
                  <label>Descrição:</label>
                  <textarea
                    name="descricao"
                    id={`descricao${index}`}
                    rows="5" cols="33"
                  ></textarea>
                </div>
                <div className="groupButtons">
                  <button
                    className="salvar"
                    onClick={() => {
                      handleSaveReport(index);
                    }}
                  >
                    Salvar
                  </button>
                  <button
                    className="apagar"
                    onClick={() => {
                      handleDelReport(index);
                    }}
                  >
                    Apagar
                  </button>
                </div>
              </article>
            ))}
        </div>
      </main>
    </Container>
  );
}

export default Relatorio2;
