import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
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
        }
        li {
          width: 74px;
          height: 32px;
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
`;
