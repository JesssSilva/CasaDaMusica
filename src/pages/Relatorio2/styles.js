import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .menu {
    width: 100%;
    height: 45px;
    display: flex;
    align-items: center;
    background-color: #b7b7b7;
    a {
      height: 100%;
      text-decoration: none;
      color:black;
    }
    .groupMenu {
      display: flex;
      align-items: center;
      height: 100%;
      :hover {
        cursor: pointer;
      }
    }
  }
  main {
    width: 100%;
    height: 100%;
    background-color: #b7b7b7;

    header {
      width: 100%;
      height: 25%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px;
      border-bottom: 1px solid #000;
      .groupData {
        display: flex;
        #user {
          border: 1px solid #000;
          margin-right: 8px;
        }
        .dados {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .info {
            display: flex;
            align-items: center;
          }
        }
      }
      #plus {
        :hover {
          fill: #fff;
          cursor: pointer;
        }
      }
    }
    .articles{
      width:100%;
      height:75%;
      overflow:auto;
      article {
      width: 100%;
      margin-top: 15px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 35%;
      padding: 15px;
      border-bottom: 1px solid #000;
      .dateLabel {
        display: flex;
        align-items: center;
        input {
          height: 45px;
        }
      }
      .description {
        display: flex;
        flex-direction: column;
        height: 100%;
        margin-top: 10px;
        textarea {
          width: 100%;
          height: 100%;
        }
      }
      .groupButtons {
        display: flex;
        width: 100%;
        height: 50px;
        margin: 15px 0;
        justify-content: flex-end;
        button {
          width: 150px;
          height: 100%;
          margin-left: 15px;
          border-radius: 16px;
          border: 0;

          :hover {
            cursor: pointer;
          }
        }
        button.salvar {
          :hover {
            background-color: green;
            cursor: pointer;
          }
        }
        button.apagar {
          :hover {
            background-color: red;
            cursor: pointer;
          }
        }
      }
    }
    }
  }
`;
