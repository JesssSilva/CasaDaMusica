import styled from 'styled-components';

export const Container = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;

    main{
      position: absolute;
      background-color:transparent;
      width:30%;
      height:20%;
      display:flex;
      flex-direction:column;
      border:3px solid purple;
      justify-content:center;
      align-items:center;
      border-radius:15px;

      a{
         width:30%;
         height:20%; 
       }
        button{
            width:100%;
            height:100%;
            color:white;
            background-color:black;
            border-radius:15px;
            border:0;
            margin-top:20px;
            transition:0.3s;
            :hover{
              background-color:#222;
              cursor:pointer;
            }
        }

        label{
          font-size:25px;
        }

        select{
          width:35%;
          height:20%;
        }
    }
`;
