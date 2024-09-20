import styled from 'styled-components';

export const StyledMenu = styled.section`
  font-size: 18px;
  border-radius: 10px;
  background-color: #bad6eb;
  padding: 48px;
  width: 85vw;
  @media (min-width: 768px) {
    max-width: 550px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: left;
    margin: 0;
    padding: 3px;

    h1 {
      font-size: 29px;
      color : #45114f;
      text-align:center;
      letter-spacing: 0.9px;
      margin-bottom: 32px;
    }
    img {
      width : 200px;
      height:200px;
      margin:auto;
      margin-bottom:10px;
      margin-top:0px;
    }
    div {
      background-color:#081f5c;
      border-radius:8px;
      height:70px;
      margin-bottom: 32px;
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 5px;

      label {
        font-size: 20px;
        color : #f7f2eb;
        text-align:center;
        margin-bottom: 5.5px;
        font-weight : bold;
        
      }

      select {
        padding: 0;
        font-size: 20px;
        text-align:center;
        border-color: transparent;
        background-color: #081f5c;
        border-radius: 8px;
        color:#f7f2eb;
      }
    }

    button {
      padding: 20px;
      border-radius: 8px;
      font-size: 30px;
      font-weight : bold;
      width: 100%;
      border-color: transparent;
      background-color: #f7f2eb;
      color:#081f5c;
    }
  }
`;
