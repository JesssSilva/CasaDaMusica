import styled from "styled-components";

export const Aluno = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  height:100%;

  main {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
    width: 100%;
    height:80%;

    img {
      width: 100%;
      height: 100%;
    }
    Form {
      background-color: transparent;
      width: 30%;
      height: 50%;
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
      Input {
        margin: 2% 0%;
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
