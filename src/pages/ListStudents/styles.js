import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  max-height: 650px;
  align-items: center;
  justify-content: center;
  .div-table {
    width: 80%;
    height: 90%;
    table {
      border-collapse: collapse;
      width: 100%;
      cursor: default;
    }
    tr {
      display: flex;
      border: none;
      outline: none;
    }
    th {
      font-family: Montserrat;
      width: 100%;
      font-size: 18px;
      font-weight: 500;
      height: 35px;
      align-items: center;
      background-color: #8bb0aa;
      color: #fff;
      width: 100%;
      overflow: auto;
      display: flex;
      justify-content: space-evenly;
      border-top-left-radius: 0px;
      border-top-right-radius: 16px;
      :first-child {
        border-top-right-radius: 0px;
        border-top-left-radius: 16px;
      }
    }
  }
  .div-table-sla {
    width: 100%;
    height: 75%;
    overflow: auto;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    ::-webkit-scrollbar-track {
      background-color: #f4f4f4;
    }
    ::-webkit-scrollbar {
      width: 6px;
      background: #f4f4f4;
    }
    ::-webkit-scrollbar-thumb {
      background: #dad7d7;
    }
    table {
      border-collapse: collapse;
      width: 100%;
      height: 35px;
      border: 1px solid lightgray;
      width: 100%;
    }
    tr {
      display: flex;
      border: none;
      outline: none;
      align-items: center;
      cursor: pointer;
    }
    tr:nth-child(even) {
      background-color: #fff;
    }
    td {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      text-align: center;
      font-family: Montserrat;
      font-size: 18px;
      font-weight: 500;
      height: 45px;
      color: #808080;
      .groupButtonTable {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        button {
          height: 80%;
          width: 150px;
          border-radius: 16px;
          border: 0;
          transition: 0.3s;
          :hover {
            background-color: #222;
            cursor: pointer;
          }
        }
        a {
          height: 80%;
          width: 150px;
          button {
            height: 100%;
            width: 100%;
            border-radius: 16px;
            border: 0;
            transition: 0.3s;
            :hover {
              background-color: #222;
              cursor: pointer;
            }
          }
        }
      }
    }
    tr:nth-child(even) {
      background-color: #f6fff8;
    }
    tr:nth-child(odd) {
      background: #fff;
    }
    tr:hover {
      background-color: #f3f3f3;
    }
  }
`;
