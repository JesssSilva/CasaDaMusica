import styled from "styled-components";

export const Container = styled.div`
  background:linear-gradient(180deg, rgba(61, 194, 236, 0.75) 0%, rgba(97, 0, 255, 0.3975) 100%);
  display:flex;
  width:100vw;
  height:100vh;
  align-items: center;
  justify-content:center;
  main {
    position: relative;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background-color: transparent;
    width:80%;
    height:100%;
    img{
      width:100%;
      height:100%;
    }
    form{
      position: absolute;
      background-color:transparent;
      width:30%;
      height:60%;
      display:flex;
      flex-direction:column;
      border:3px solid purple;
      justify-content:center;
      align-items:center;
      border-radius:15px;
      a{
        width:30%;
       height:10%; 
      }
      button{
       width:100%;
       height:100%;
       color:white;
       background-color:black;
       border-radius:15px;
       border:0;
       transition:0.3s;
       :hover{
        background-color:#222;
        cursor:pointer;
       }

      }
      input{
        margin: 5% 0% ;
        width:75%;
        height:09%;
        border-radius:15px;
        box-shadow:transparent;
        border:none;
        padding:5px;
      }
      button, input { outline: none; }
    }
  }
`;
