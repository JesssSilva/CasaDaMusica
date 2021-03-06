import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: #e8e8e8;
  main {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    width: 80%;
    height: 100%;
    form {
      position: absolute;
      background-color: transparent;
      width: 30%;
      height: 50%;
      display: flex;
      flex-direction: column;
      border: 3px solid purple;
      justify-content: center;
      align-items: center;
      border-radius: 15px;

      button {
        width: 40%;
        height: 10%;
        color: white;
        background-color: black;
        border-radius: 15px;
        border: 0;
        transition: 0.3s;
        margin-bottom: 10px;
        margin-top: 50px;
        :hover {
          background-color: #222;
          cursor: pointer;
        }
      }
      input {
        margin: 5% 0%;
        width: 75%;
        height: 08%;
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
