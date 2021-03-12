import styled from "styled-components";

export const Aluno = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;

  main {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
    width:100%;
    img {
      width: 100%;
      height: 100%;
    }
    form {
      background-color: transparent;
      width: 30%;
      height: 80%;
      display: flex;
      flex-direction: column;
      border: 3px solid purple;
      justify-content: center;
      align-items: center;
      border-radius: 15px;
      min-width: 250px;
      button {
        width: 30%;
        min-width: 150px;
        height: 10%;
        min-height: 40px;
        color: white;
        background-color: black;
        border-radius: 15px;
        border: 0;
        transition: 0.3s;
        margin-bottom: 10px;
        :hover {
          background-color: #222;
          cursor: pointer;
        }
      }
      input {
        margin: 5% 0%;
        width: 75%;
        min-height: 40px;
        height: 09%;
        border-radius: 15px;
        box-shadow: transparent;
        border: none;
        padding: 5px;
      }
      button,
      input {
        outline: none;
      }
    }
  }
`;
