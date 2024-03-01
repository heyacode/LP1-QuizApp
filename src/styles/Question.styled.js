import styled from 'styled-components';

export const StyledQuestion = styled.section`
  background-color: #f3beaf;
  width: 90vw;
  padding: 16px;
  border-radius: 30px;
  @media (min-width: 768px) {
    max-width: 800px;
  }

  p {
    text-align: right;
    color:#8ca4c8;
    @media (min-width: 768px) {
      font-size: 20px;
    }
  }
  h1 {
    color:#636ba1;
    margin: 16px 0;
    @media (min-width: 768px) {
      font-size: 22px;
      text-align: center;
    }
  }

  button.reponse {
    border-color: transparent;
    padding: 10px;
    text-align: center;
    border-radius: 50px;
    margin-bottom: 8px;
    width: 100%;
    background-color: #f39594;
    color:#e6e3f1;
    transition: all 0.5s ease-in-out;
    font-size: 30px;
    

    :hover {
      background-color: #8ca4c8;
      color: #ffffff;
    }
    @media (min-width: 768px) {
      font-size: 15px;
    }
  }

  button.suivant {
    background-color: #636ba1;
    margin-top: 16px;
    width: 100%;
    padding: 10px;
    border-radius: 50px;
    font-size: 15px;
    font-weight: 700;
    border-color: transparent;
    color:#e6e3f1;
    @media (min-width: 768px) {
      font-size: 25px;
    }
  }
`;
