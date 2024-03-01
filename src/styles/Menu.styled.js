import styled from 'styled-components';

export const StyledMenu = styled.section`
  font-size: 18px;
  border-radius: 10px;
  background-color: #f3beaf;
  padding: 48px;
  width: 85vw;
  @media (min-width: 768px) {
    max-width: 550px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    margin: 0;
    padding: 0;

    h1 {
      font-size: 29px;
      color : #45114f;
      text-align:center;
      letter-spacing: 0.9px;
      margin-bottom: 32px;
    }
    img {
      width : 200px;
      height:150px;
      margin:auto;
      margin-bottom:10px;
      margin-top:0px;
    }
    div {
      background-color:#f39594;
      border-radius:20px;
      height:70px;
      margin-bottom: 32px;
      width: 100%;
      display: flex;
      flex-direction: column;

      label {
        font-size: 20px;
        color : #e6e3f1;
        text-align:center;
        margin-bottom: 5.5px;
        font-weight : bold;
        
      }

      select {
        padding: 5px;
        font-size: 20px;
        text-align:center;
        border-color: transparent;
        background-color: #f39594;
        border-radius: 50px;
        color:#e6e3f1;
      }
    }

    button {
      padding: 10px;
      border-radius: 50px;
      font-size: 20px;
      font-weight : bold;
      width: 100%;
      border-color: transparent;
      background-color: #636ba1;
      color:#e6e3f1;
    }
  }
`;
