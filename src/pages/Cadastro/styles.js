import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  overflow:auto;
  main {
    width:80%;
    height:100%;
    .header {
      display: flex;
      flex-direction: column;
      align-items: center;

      button {
        width: 50%;
        min-width: 150px;
        height: 10%;
        min-height: 40px;
        color: white;
        background-color: black;
        border: 0;
        transition: 0.3s;
        :hover {
          background-color: #222;
          cursor: pointer;
        }

        button {
          outline: none;
        }
      }
      .active {
        background-color: blue;
      }
    }
  }
`;
