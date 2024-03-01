import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;400;700;900&display=swap');


html {
  font-size: 100%;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: 'Lato', sans-serif;
  font-size: 13px;
  line-height: 1.4;
  display: flex;
  background-color: #e6e3f1;
  overflow: hidden;
  
 
}

h1,
h2,
h3,
h4 {
  margin: 0;
	padding: 0;
}

a {
  text-decoration: none;
}

p {
  margin: 0;
  padding: 0;
}

img {
display:block;
width:100%;
}

button {
  cursor: pointer;
}

`;

export default GlobalStyle;
