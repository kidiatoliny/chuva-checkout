import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`


 * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

  }
  *:focus {
    outline: 0;
  }
  html {
    font-size: 62.5%;

  }


  html, body, #root {
    height: 100%;
    background-color:#e5e5e5;


  }

  body, input, button {
   font: 1.4rem 'Poppins',sans-serif;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
  select {
      appearance: none;
  }

  @media screen and (max-width:413px){

html{
  font-size:50%
}
  }
`
export default GlobalStyles
