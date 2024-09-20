import styled from 'styled-components';

export const StyledQuestion = styled.section`
  background-color: #bad6eb;
  width: 90vw;
  padding: 16px;
  border-radius: 16px;
  @media (min-width: 768px) {
    max-width: 800px;
  }

  p {
    text-align: right;
    color:#081f5c;
    @media (min-width: 768px) {
      font-size: 20px;
    }
  }
  h1 {
    color:#081f5c;
    margin: 16px 0;
    @media (min-width: 768px) {
      font-size: 25px;
      text-align: center;
    }
  }

  button.reponse {
    border-color: transparent;
    padding: 10px;
    text-align: center;
    border-radius: 8px;
    margin-bottom: 8px;
    width: 100%;
    background-color: #081f5c;
    color:#f7f2eb;
    transition: all 0.5s ease-in-out;
    font-size: 30px;
    

    :hover {
      background-color: #f7f2eb;
      color: #081f5c;
    }
    @media (min-width: 768px) {
      font-size: 15px;
    }
  }

  button.suivant {
    background-color: #f7f2eb;
    margin-top: 16px;
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    font-size: 30px;
    font-weight: 700;
    border-color: transparent;
    color:#081f5c;
    @media (min-width: 768px) {
      font-size: 25px;
    }
  }
`;
