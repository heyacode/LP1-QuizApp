import styled from 'styled-components';

export const Loader = styled.div`
  margin: 0 auto;
  border: 16px solid #bad6eb;
  border-top: 16px solid #081f5c; 
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
