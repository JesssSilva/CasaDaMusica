import styled from 'styled-components';

export const Container = styled.div`
  width:100vw;
  height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  main{
    width:50%;
    height:100%;
    background-color:#b7b7b7;
 
    header{
      width:100%;
      height:25%;
      display:flex;
      justify-content:space-between;
      align-items:center;
      padding:5px;
      border-bottom: 1px solid #000;
      .groupData{
        display:flex;
        #user{
          border: 1px solid  #000;
          margin-right:8px;
        }
      .dados{
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        .info{
          display:flex;
          align-items:center;
        }
       }
      }
      #plus{
       
        :hover{
          fill:#fff;
          cursor:pointer;
        }
      }
    }
    article{
      width:100%;
      margin-top:15px;
      display:flex;
      flex-direction:column;
      justify-content:space-between;
      height:25%;
      padding:5px;
      .description{
        display:flex;
        align-items:flex-start;
        height:100%;
        margin-top:10px;
        textarea{
          width:100%;
          height:100%;
        }
      }
    }
  }
`;
