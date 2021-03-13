import styled from "styled-components";

export const Containers = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #c4c4c4;

  header {
    width: 100%;
    height: 10%;
    background-color: #d3d3d3;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 10%;
      height: 100%;
      :hover{
        cursor: pointer;
      }
    }
    nav {
      width: 60%;
      height: 100%;
      display: flex;
      align-items: center;
      ul {
        width: 100%;
        padding: 0px;
        margin: 0px;
        list-style: none;
        display: flex;
        justify-content: space-evenly;
        a {
          text-decoration: none;
          width: 150px;
        }
        li {
          width: 150px;
          height: 40px;
          display: flex;
          background-color: black;
          color: white;
          align-items: center;
          justify-content: center;
          border-radius: 15px;
          transition: 0.3s;
          :hover {
            background-color: #ff4040;
            cursor: pointer;
          }
        }
      }
    }
  }
  .pages {
    width: 100%;
    min-height: 90%;
    max-height: 620px;
    overflow: auto;
  }
`;
