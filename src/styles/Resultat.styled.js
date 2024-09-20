import styled from 'styled-components';

export const StyledResultat = styled.section`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  width: 600px;
  height: 400px;
  background-color: #bad6eb;
  border-radius: 8px;
  z-index: 1010;
  @media (min-width: 768px) {
    width: 600px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    color: #081f5c;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    padding: 16px 32px;
    overflow: auto;
    @media (min-width: 768px) {
      font-size: 22px;
    }

    button {
      border-radius: 8px;
      font-size: 30px;
      font-weight: 700;
      color: #081f5c;
      margin-top:5px;
      width: 100%;
      border-color: transparent;
      background-color: #f7f2eb;
      padding: 10px;
      :hover {
        opacity: 0.95;
        transform: scale(1.01);
      }
      @media (min-width: 768px) {
        font-size: 22px;
      }
    }
  }
`;

export const StyledResultatOverlay = styled.section`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #3333;
`;
